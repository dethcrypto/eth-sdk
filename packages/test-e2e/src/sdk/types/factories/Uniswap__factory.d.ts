import { Provider } from '@ethersproject/providers'
import { Signer } from 'ethers'

import type { Uniswap, UniswapInterface } from '../Uniswap'
export declare class Uniswap__factory {
  static readonly abi: (
    | {
        inputs: any[]
        stateMutability: string
        type: string
        anonymous?: undefined
        name?: undefined
        outputs?: undefined
      }
    | {
        anonymous: boolean
        inputs: {
          indexed: boolean
          internalType: string
          name: string
          type: string
        }[]
        name: string
        type: string
        stateMutability?: undefined
        outputs?: undefined
      }
    | {
        inputs: {
          internalType: string
          name: string
          type: string
        }[]
        name: string
        outputs: {
          internalType: string
          name: string
          type: string
        }[]
        stateMutability: string
        type: string
        anonymous?: undefined
      }
  )[]
  static createInterface(): UniswapInterface
  static connect(address: string, signerOrProvider: Signer | Provider): Uniswap
}
