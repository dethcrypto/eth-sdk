import { Address } from '../config'

export type GetAbi = (network: string, address: Address, apiKey: string) => Promise<object>
