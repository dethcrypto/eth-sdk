import { ethers } from 'ethers'

import { EthSdkConfig } from '../config'

export function getRpcProvider(config: EthSdkConfig): RpcProvider {
  return new ethers.providers.JsonRpcProvider(config.rpcProvider.endpoint)
}

export type RpcProvider = Pick<ethers.providers.Provider, 'getCode' | 'getStorageAt' | 'call'>

export type GetRpcProvider = typeof getRpcProvider
