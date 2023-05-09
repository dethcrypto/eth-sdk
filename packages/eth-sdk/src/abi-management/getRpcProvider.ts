import { ethers } from 'ethers'

import { EthSdkConfig, RpcURLs } from '../config'
import { NetworkSymbol } from './networks'

const INFURA_PROJECT_URL = '0993a4f4500c4fff88649d28b331898c'

const rpcProviders: RpcURLs = {
  mainnet: `https://mainnet.infura.io/v3/${INFURA_PROJECT_URL}`,
  kovan: `https://kovan.infura.io/v3/${INFURA_PROJECT_URL}`,
  rinkeby: `https://rinkeby.infura.io/v3/${INFURA_PROJECT_URL}`,
  ropsten: `https://ropsten.infura.io/v3/${INFURA_PROJECT_URL}`,
  goerli: `https://goerli.infura.io/v3/${INFURA_PROJECT_URL}`,
  sepolia: `https://sepolia.infura.io/v3/${INFURA_PROJECT_URL}`,
}

export function getRpcProvider(config: EthSdkConfig, network: NetworkSymbol): RpcProvider | null {
  const rpcUrl = config.rpc[network] || rpcProviders[network]

  return rpcUrl ? new ethers.providers.JsonRpcProvider(rpcUrl) : null
}

export type RpcProvider = Pick<ethers.providers.Provider, 'getCode' | 'getStorageAt' | 'call'>

export type GetRpcProvider = typeof getRpcProvider
