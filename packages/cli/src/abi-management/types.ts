import { Address } from '../sdk-def'

export type GetAbi = (network: string, address: Address) => Promise<Object>
