import debug from 'debug'
import { dirname, join } from 'path'

import { Address } from '../config'
import { traverseContractsMap } from '../config/traverse'
import { EthSdkCtx } from '../types'
import { getABIFromEtherscan } from './etherscan/getAbiFromEtherscan'
import type { UserEtherscanURLs } from './etherscan/urls'
import type { NetworkSymbol } from './networks'

const d = debug('@dethcrypto/eth-sdk:abi')

export type GetAbi = (
  network: NetworkSymbol,
  address: Address,
  apiKey: string,
  userNetworks: UserEtherscanURLs,
) => Promise<object>

export async function gatherABIs(ctx: EthSdkCtx, getAbi: GetAbi = getABIFromEtherscan) {
  const { config, fs } = ctx

  await traverseContractsMap(config.contracts, async (network, key, address) => {
    const fullAbiPath = join(config.outputPath, 'abis', network, ...key) + '.json'
    d(`Getting ABI for ${key.join('.')}`)

    if (!fs.exists(fullAbiPath)) {
      d('ABI doesnt exist already. Querying etherscan')
      const abi = await getAbi(network, address, config.etherscanKey, config.etherscanURLs)
      await fs.ensureDir(dirname(fullAbiPath))
      await fs.write(fullAbiPath, JSON.stringify(abi))
    }
  })
}
