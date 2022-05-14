import debug from 'debug'
import { join } from 'path'
import { CodegenConfig } from 'typechain'

import { EthSdkContracts } from '../config'
import { Fs, realFs } from '../peripherals/fs'
import { generateIndex } from './generateIndex'
import { generateTypes } from './generateTypes'
const d = debug('@dethcrypto/eth-sdk-cli:client')

export async function generateTsClient(
  contracts: EthSdkContracts,
  abisRoot: string,
  outputRoot: string,
  outputToAbiRelativePath: string,
  fs: Fs = realFs,
  typechainFlags: CodegenConfig,
) {
  d(`Generating ts client to ${outputRoot}`)
  const typesOutputPath = join(outputRoot, './types')
  await generateTypes(abisRoot, typesOutputPath, typechainFlags)

  const abisRootOut = join(outputRoot, 'abis')
  await fs.copy(abisRoot, abisRootOut)

  await generateIndex(contracts, outputRoot, outputToAbiRelativePath)
}
