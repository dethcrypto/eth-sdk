import type { EthSdkConfig } from './config/types'
import type { EthSdkCliArgs } from './parseArgs'
import type { Fs } from './peripherals/fs'

/**
 * @internal
 */
export interface EthSdkCtx {
  cliArgs: EthSdkCliArgs
  config: EthSdkConfig
  fs: Fs
}
