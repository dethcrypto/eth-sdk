import { z } from 'zod'

export interface NestedAddresses {
  [name: string]: Address | NestedAddresses
}

export interface SdkDefinition {
  [network: string]: NestedAddresses
}

const NestedAddressesSchema = z.lazy(() =>
  z.record(z.union([AddressSchema, NestedAddressesSchema])),
) as z.ZodSchema<SdkDefinition>

export const SdkDefinitionSchema = z.record(NestedAddressesSchema)

import { Opaque } from 'ts-essentials'

export type Address = Opaque<string, 'address'>
export const AddressSchema: z.ZodType<Address> = z.string() as any
export function makeAddress(address: string): Address {
  // @todo ensure that string is really an address
  return address as any
}
