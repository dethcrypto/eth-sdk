import debug from 'debug'
import { dirname, join } from 'path'

import { traverseContractsMap } from '../config/traverse'
import { EthSdkCtx } from '../types'
import { detectProxy } from './detectProxy'
import { getABIFromEtherscan } from './etherscan/getAbiFromEtherscan'
import { GetRpcProvider, getRpcProvider } from './getRpcProvider'
import { GetAbi } from './types'

const d = debug('@dethcrypto/eth-sdk:abi')

export async function gatherABIs(
  { config, fs, cliArgs }: EthSdkCtx,
  getAbi: GetAbi = getABIFromEtherscan,
  getProvider: GetRpcProvider = getRpcProvider,
) {
  await traverseContractsMap(config.contracts, async (network, key, address) => {
    const fullAbiPath = join(cliArgs.workingDirPath, 'abis', network, ...key) + '.json'
    d(`Getting ABI for ${key.join('.')}`)

    if (!fs.exists(fullAbiPath)) {
      d('ABI doesnt exist already. Querying etherscan')
      const { etherscanKey, etherscanURLs } = config

      let abi = await getAbi(network, address, etherscanKey, etherscanURLs)

      if (!config.noFollowProxies) {
        const rpcProvider = getProvider(config, network)
        if (rpcProvider) {
          const detectedProxy = await detectProxy(address, abi, rpcProvider)
          if (detectedProxy.isProxy) {
            // Implementation ABI will usually contain proxy ABI,
            // so just replacing is a good enough merging strategy.
            abi = await getAbi(network, detectedProxy.implAddress, etherscanKey, etherscanURLs)
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
