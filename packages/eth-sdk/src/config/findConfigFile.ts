import { join } from 'path'

import { EthSdkCliArgs } from '../parseArgs'
import { Fs } from '../peripherals/fs'

const CONFIG_FILENAMES = ['config.js', 'config.json', 'eth-sdk.config.js', 'eth-sdk.config.json']

/**
 * @param args - arguments passed to the CLI
 * @param fs - file system fasade
 * @returns path to config file
 */
export function findConfigFile(args: EthSdkCliArgs, fs: Fs): string {
  const existingConfigs = CONFIG_FILENAMES.map((fn) => join(args.workingDirPath, fn)).filter(fs.exists)

  if (existingConfigs.length === 0) {
    throw new Error(
      `Couldn't find a config file. Create one of ${CONFIG_FILENAMES.join(', ')} in ${args.workingDirPath}`,
    )
  }

  if (existingConfigs.length > 1) {
    throw new Error(`Found too many config files!`)
  }

  return existingConfigs[0]
}
