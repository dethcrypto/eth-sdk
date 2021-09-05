import { Provider } from '@ethersproject/providers'
import { Signer } from 'ethers'

import type { Dai, DaiInterface } from '../Dai'
export declare class Dai__factory {
  static readonly abi: (
    | {
        inputs: {
          internalType: string
          name: string
          type: string
        }[]
        payable: boolean
        stateMutability: string
        type: string
        anonymous?: undefined
        name?: undefined
        constant?: undefined
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
        payable?: undefined
        stateMutability?: undefined
        constant?: undefined
        outputs?: undefined
      }
    | {
        constant: boolean
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
        payable: boolean
        stateMutability: string
        type: string
        anonymous?: undefined
      }
  )[]
  static createInterface(): DaiInterface
  static connect(address: string, signerOrProvider: Signer | Provider): Dai
}
