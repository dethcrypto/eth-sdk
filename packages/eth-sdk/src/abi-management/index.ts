import debug from 'debug'
import { dirname, join } from 'path'

import { Fs } from '../helpers/fs'
import { traverseSdkDefinition } from '../helpers/traverse'
import { SdkDefinition } from '../sdk-def'
import { Address } from '../sdk-def'
import { getABIFromEtherscan } from './etherscan/getAbiFromEtherscan'
import { GetAbi } from './types'
const d = debug('@dethcrypto/eth-sdk:abi')

export async function gatherABIs(def: SdkDefinition, outputRoot: string, fs: Fs, getAbi: GetAbi = getABIFromEtherscan) {
  await traverseSdkDefinition(def, async (network: string, key: string[], address: Address) => {
    const fullAbiPath = join(outputRoot, 'abis', network, ...key) + '.json'
    d(`Getting ABI for ${key.join('.')}`)

    if (!fs.exists(fullAbiPath)) {
      d('ABI doesnt exist already. Querying etherscan')
      const abi = await getAbi(network, address)
      fs.ensureDir(dirname(fullAbiPath))
      fs.write(fullAbiPath, JSON.stringify(abi))
    }
  })
}
