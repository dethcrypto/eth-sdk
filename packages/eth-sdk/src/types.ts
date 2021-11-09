import type { JsonFragment } from '@ethersproject/abi'

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

/**
 * > The JSON format for a contract’s interface is given by an array of function,
 * > event and error descriptions.
 * @see https://docs.soliditylang.org/en/develop/abi-spec.html#json
 * @internal
 */
export interface Abi extends Array<JsonFragment> {}

export type { JsonFragment }
