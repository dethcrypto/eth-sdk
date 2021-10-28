import { join } from 'path'

import { EthSdkCliArgs } from '../parseArgs'
import { Fs } from '../peripherals/fs'

const DEFAULT_CONFIG_FILENAMES = ['contracts.json', 'contracts.js']

/**
 * @param args - arguments passed to the CLI
 * @param fs - file system fasade
 * @returns path to config file
 */
export function findConfigFile(args: EthSdkCliArgs, fs: Fs): string {
  const existingConfigs = DEFAULT_CONFIG_FILENAMES.map((fn) => join(args.workingDirPath, fn)).filter(fs.exists)

  if (existingConfigs.length === 0) {
    throw new Error(
      `Couldn't find a config file. Create one of ${DEFAULT_CONFIG_FILENAMES.join(', ')} in ${args.workingDirPath}`,
    )
  }

  if (existingConfigs.length > 1) {
    throw new Error(`Found too many config files!`)
  }

  return existingConfigs[0]
}
