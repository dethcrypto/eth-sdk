import type { EthSdkConfig } from './config/types'
import type { EthSdkCliArgs } from './parseArgs'
import type { Fs } from './peripherals/fs'

/**
 * @internal
 */
export interface EthSdkCtx {
  readonly cliArgs: EthSdkCliArgs
  readonly config: EthSdkConfig
  readonly fs: Fs
}
