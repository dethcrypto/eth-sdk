import { invert } from 'lodash'
import { SafeDictionary } from 'ts-essentials'

// note: copied from https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-etherscan/src/network/prober.ts
export enum NetworkID {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GOERLI = 5,
  KOVAN = 42,
  // Binance Smart Chain
  BSC = 56,
  BSC_TESTNET = 97,
  // Huobi ECO Chain
  HECO = 128,
  HECO_TESTNET = 256,
  // Fantom mainnet
  OPERA = 250,
  FTM_TESTNET = 4002,
  // Optimism
  OPTIMISTIC_ETHEREUM = 10,
  OPTIMISTIC_KOVAN = 69,
  // Polygon
  POLYGON = 137,
  POLYGON_MUMBAI = 80001,
  // Arbitrum
  ARBITRUM_ONE = 42161,
  ARBITRUM_TESTNET = 421611,
}

export const networkIDtoSymbol = {
  [NetworkID.MAINNET]: 'mainnet',
  [NetworkID.ROPSTEN]: 'ropsten',
  [NetworkID.RINKEBY]: 'rinkeby',
  [NetworkID.GOERLI]: 'goerli',
  [NetworkID.KOVAN]: 'kovan',
  [NetworkID.BSC]: 'bsc',
  [NetworkID.BSC_TESTNET]: 'bscTestnet',
  [NetworkID.HECO]: 'heco',
  [NetworkID.HECO_TESTNET]: 'hecoTestnet',
  [NetworkID.OPERA]: 'opera',
  [NetworkID.FTM_TESTNET]: 'ftmTestnet',
  [NetworkID.OPTIMISTIC_ETHEREUM]: 'optimism',
  [NetworkID.OPTIMISTIC_KOVAN]: 'optimismKovan',
  [NetworkID.POLYGON]: 'polygon',
  [NetworkID.POLYGON_MUMBAI]: 'polygonMumbai',
  [NetworkID.ARBITRUM_ONE]: 'arbitrumOne',
  [NetworkID.ARBITRUM_TESTNET]: 'arbitrumTestnet',
} as const

export type NetworkSymbol = typeof networkIDtoSymbol[keyof typeof networkIDtoSymbol]

export const symbolToNetworkId: SafeDictionary<NetworkID, string> = invert(networkIDtoSymbol) as any
