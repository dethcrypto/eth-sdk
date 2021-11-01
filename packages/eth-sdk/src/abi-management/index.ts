import debug from 'debug'
import { dirname, join } from 'path'

import { Address } from '../config'
import { traverseContractsMap } from '../config/traverse'
import { EthSdkCtx } from '../types'
import { getABIFromEtherscan } from './etherscan/getAbiFromEtherscan'
import { GetAbi } from './types'
const d = debug('@dethcrypto/eth-sdk:abi')

export async function gatherABIs(ctx: EthSdkCtx, getAbi: GetAbi = getABIFromEtherscan) {
  const { config, fs } = ctx

  await traverseContractsMap(config.contracts, async (network: string, key: string[], address: Address) => {
    const fullAbiPath = join(config.outputPath, 'abis', network, ...key) + '.json'
    d(`Getting ABI for ${key.join('.')}`)

    if (!fs.exists(fullAbiPath)) {
      d('ABI doesnt exist already. Querying etherscan')
      const abi = await getAbi(network, address)
      await fs.ensureDir(dirname(fullAbiPath))
      await fs.write(fullAbiPath, JSON.stringify(abi))
    }
  })
}
