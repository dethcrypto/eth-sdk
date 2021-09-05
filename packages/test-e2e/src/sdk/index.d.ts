import { Signer } from 'ethers'
import { Awaited } from 'ts-essentials'

import * as types from './types'
export declare function getContract<T>(address: string, abiPath: string, defaultSigner: Signer): T
export declare type MainnetSdk = Awaited<ReturnType<typeof getMainnetSdk>>
export declare function getMainnetSdk(defaultSigner: Signer): Promise<{
  tokens: {
    dai: types.Dai
    mkr: types.Mkr
  }
  uniswap: types.Uniswap
}>
