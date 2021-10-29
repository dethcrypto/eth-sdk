import { basename, extname } from 'path'

import { makeError } from '../peripherals/makeError'
import { EthSdkConfig, ethSdkConfigSchema } from './types'

export async function readConfig(filePath: string, requireJs: (id: string) => unknown): Promise<EthSdkConfig> {
  const extension = extname(filePath)
  const fileName = basename(filePath, extension)

  try {
    let json: unknown
    if (['.json', '.js'].includes(extension)) {
      json = requireJs(filePath)

      // We support bare contracts dictionary for backwards compatibility.
      if (fileName === 'contracts') {
        json = { contracts: json }
      }
    } else {
      // @todo Support TypeScript configs
      throw new Error(`Unsupported config file extension: ${extension}`)
    }

    return ethSdkConfigSchema.parse(json)
  } catch (err) {
    throw new Error(`Could not read config file: ${filePath}` + '\n' + makeError(err).message)
  }
}
