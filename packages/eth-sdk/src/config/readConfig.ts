import { extname } from 'path'

import { makeError } from '../utils/makeError'
import { parseEthSdkConfig } from '.'
import { EthSdkConfig } from './types'

export async function readConfig(filePath: string, requireJs: (id: string) => unknown): Promise<EthSdkConfig> {
  const extension = extname(filePath)

  try {
    let json: unknown
    if (['.json', '.js', '.cjs'].includes(extension)) {
      json = requireJs(filePath)
    } else {
      // @todo Support TypeScript configs
      throw new Error(`Unsupported config file extension: ${extension}`)
    }

    return parseEthSdkConfig(json)
  } catch (err) {
    throw new Error(`Could not read config file: ${filePath}` + '\n' + makeError(err).message)
  }
}
