import debug from 'debug'
import { join } from 'path'

import { Fs, realFs } from '../peripherals/fs'
import { EthSdKContracts } from '../config'
import { generateIndex } from './generateIndex'
import { generateTypes } from './generateTypes'
const d = debug('@dethcrypto/eth-sdk-cli:client')

export async function generateTsClient(
  sdkDef: EthSdKContracts,
  abisRoot: string,
  outputRoot: string,
  outputToAbiRelativePath: string,
  fs: Fs = realFs,
) {
  d(`Generating ts client to ${outputRoot}`)
  const abisGlob = `${abisRoot}/**/*.json`
  const typesOutputPath = join(outputRoot, './types')
  await generateTypes(abisGlob, typesOutputPath)

  const abisRootOut = join(outputRoot, 'abis')
  await fs.copy(abisRoot, abisRootOut)

  await generateIndex(sdkDef, outputRoot, outputToAbiRelativePath)
}
