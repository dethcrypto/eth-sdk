import { Address } from '../config'

export type GetAbi = (network: string, address: Address) => Promise<Object>
