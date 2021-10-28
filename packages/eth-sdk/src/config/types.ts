/* eslint-disable no-redeclare */ // @todo discuss using @typescript-eslint/no-redeclare instead
import { Opaque } from 'ts-essentials'
import { z } from 'zod'

export interface NestedAddresses {
  [name: string]: Address | NestedAddresses
}

export interface EthSdKContracts {
  [network: string]: NestedAddresses
}

const ethSdKContractsSchema = z.lazy(() =>
  z.record(z.union([addressSchema, ethSdKContractsSchema])),
) as z.ZodSchema<EthSdKContracts>

// @todo rename this to ethSdkConfigSchema or use declaration merging?
export const EthSdkConfig = z
  .object({
    contracts: ethSdKContractsSchema,
    outputPath: z.string().default('./node_modules/.dethcrypto/eth-sdk-client'),
  })
  .strict()

export interface EthSdkConfig extends z.infer<typeof EthSdkConfig> {}

export type Address = Opaque<string, 'address'>
export const addressSchema: z.ZodType<Address> = z.string().regex(/^0x[0-9a-fA-F]{40}$/) as any

/**
 * @see https://info.etherscan.com/what-is-an-ethereum-address/
 * @param address - string representation of an address
 * @returns the same string branded as Address if it's a valid address
 */
export function makeAddress(address: string): Address {
  return addressSchema.parse(address)
}
