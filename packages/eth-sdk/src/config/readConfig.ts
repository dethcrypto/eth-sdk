import { basename } from 'path'

import { makeError } from '../peripherals/makeError'
import { EthSdkConfig } from './types'

export async function readConfig(filePath: string): Promise<EthSdkConfig> {
  const [fileName, extension] = basename(filePath).split('.')

  try {
    let json: unknown
    if (['.json', '.js'].includes(extension)) {
      json = require(filePath)

      // We support bare contracts dictionary for backwards compatibility.
      if (fileName === 'contracts') {
        json = { contracts: json }
      }
    } else {
      // @todo Support TypeScript configs
      throw new Error(`Unsupported config file extension: ${extension}`)
    }

    return EthSdkConfig.parse(json)
  } catch (err) {
    throw new Error(`Could not read config file: ${filePath}` + '\n' + makeError(err).message)
  }
}
