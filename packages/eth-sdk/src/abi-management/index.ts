import debug from 'debug'
import { dirname, join } from 'path'

import { EthSdkConfig } from '../config'
import { traverseContractsMap } from '../config/traverse'
import { fetchJson } from '../peripherals/fetchJson'
import { EthSdkCtx } from '../types'
import { detectProxy } from './detectProxy'
import { getAbiFromEtherscan } from './etherscan/getAbiFromEtherscan'
import { GetRpcProvider, getRpcProvider } from './getRpcProvider'
import { getAbiFromSourcify } from './sourcify/getAbiFromSourcify'
import { GetAbi } from './types'

export type { GetAbi }

export const d = debug('@dethcrypto/eth-sdk:abi')

export async function gatherABIs(
  { config, fs, cliArgs }: EthSdkCtx,
  getAbi: GetAbi = makeGetAbi(config),
  getProvider: GetRpcProvider = getRpcProvider,
) {
  await traverseContractsMap(config.contracts, async (network, key, address) => {
    const fullAbiPath = join(cliArgs.workingDirPath, 'abis', network, ...key) + '.json'
    d(`Getting ABI for ${key.join('.')}`)

    if (!fs.exists(fullAbiPath)) {
      d('ABI doesnt exist already. Querying etherscan')
      let abi = await getAbi(network, address)

      if (!config.noFollowProxies) {
        const rpcProvider = getProvider(config, network)
        if (rpcProvider) {
          const detectedProxy = await detectProxy(address, abi, rpcProvider)
          if (detectedProxy.isProxy) {
            // Implementation ABI will usually contain proxy ABI,
            // so just replacing is a good enough merging strategy.
            abi = await getAbi(network, detectedProxy.implAddress)
          }
        } else {
          console.warn(
            `No RPC URL found for network ${network}. Please add it to "config.rpc.${network}" to enable fetching proxy implementation ABIs.`,
          )
        }
      }

      await fs.ensureDir(dirname(fullAbiPath))
      await fs.write(fullAbiPath, JSON.stringify(abi))
    }
  })
}

const makeGetAbi = (config: EthSdkConfig): GetAbi => {
  switch (config.abiSource) {
    case 'etherscan':
      return (network, address) =>
        getAbiFromEtherscan(network, address, config.etherscanKey, config.etherscanURLs, fetchJson)
    case 'sourcify': {
      // @todo allow passing this in config
      const userNetworkIds = {}
      return (network, address) => getAbiFromSourcify(network, address, userNetworkIds, fetchJson)
    }
  }
}
