import debug from 'debug'
import { join } from 'path'

import { Fs, realFs } from '../helpers/fs'
import { SdkDefinition } from '../sdk-def'
import { generateIndex } from './generateIndex'
import { generateTypes } from './generateTypes'
const d = debug('@eth-dx/sdk-client:client')

export async function generateTsClient(sdkDef: SdkDefinition, abisRoot: string, outputRoot: string, fs: Fs = realFs) {
  d(`Generating ts client to ${outputRoot}`)
  const abisGlob = `${abisRoot}/**/*.json`
  const typesOutputPath = join(outputRoot, './types')
  await generateTypes(abisGlob, typesOutputPath)

  const abisRootOut = join(outputRoot, 'abis')
  fs.copy(abisRoot, abisRootOut)

  await generateIndex(sdkDef, outputRoot)
}
