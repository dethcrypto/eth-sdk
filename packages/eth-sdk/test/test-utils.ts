import { Address, AddressInput } from '../src/config'

export const randomAddress = (prefix: AddressInput = '0x'): Address =>
  (prefix + Math.random().toString(16).slice(2)).padEnd(42, '0') as Address
