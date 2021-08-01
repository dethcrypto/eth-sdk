import { join } from 'path'

import { Fs } from '../helpers/fs'
import { Args } from '../parseArgs'
import { SdkDefinitionSchema } from './types'

const DEFAULT_CONFIG_FILENAMES = ['contracts.json', 'contracts.js']

export function loadSdkDefinition(args: Args, fs: Fs) {
  const existingConfigs = DEFAULT_CONFIG_FILENAMES.map((fn) => join(args.workingDirPath, fn)).filter(fs.exists)

  if (existingConfigs.length === 0) {
    throw new Error(
      `Couldn't find a config file. Create one of ${DEFAULT_CONFIG_FILENAMES.join(', ')} in ${args.workingDirPath}`,
    )
  }

  if (existingConfigs.length > 1) {
    throw new Error(`Found too many config files!`)
  }

  const loadedSchema = require(existingConfigs[0])

  return SdkDefinitionSchema.parse(loadedSchema)
}
