import { Address } from '../config'
import { Abi } from '../types'
import type { NetworkSymbol } from './networks'

export type GetAbi = (network: NetworkSymbol, address: Address) => Promise<Abi>
