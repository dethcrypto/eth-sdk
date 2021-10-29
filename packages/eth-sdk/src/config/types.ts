import { Opaque } from 'ts-essentials'
import type { ZodString } from 'zod'
import { z } from 'zod'

import { networkIDtoSymbol, NetworkSymbol } from '../abi-management/networks'

export interface NestedAddresses {
  [name: string]: Address | NestedAddresses
}

export interface EthSdKContracts extends Record<NetworkSymbol, NestedAddresses> {}

const networkSymbolSchema = Object.values(networkIDtoSymbol).map((net) => z.literal(net))

export const ethSdKContractsSchema = z.lazy(() =>
  z.record(
    // @todo consider parsing network symbols manually, bcs zod errors are just bad
    z.union(networkSymbolSchema as any as [ZodString, ZodString]),
    z.union([addressSchema, ethSdKContractsSchema]),
  ),
) as z.ZodSchema<EthSdKContracts>

export const ethSdkConfigSchema = z
  .object({
    contracts: ethSdKContractsSchema,
    outputPath: z.string().default('./node_modules/.dethcrypto/eth-sdk-client'),
  })
  .strict()

export interface EthSdkConfig extends z.infer<typeof ethSdkConfigSchema> {}

export type Address = Opaque<string, 'address'>
const addressSchema: z.ZodType<Address> = z
  .string()
  .length(42)
  .regex(/^0x[0-9a-fA-F]+$/) as any

/**
 * @see https://info.etherscan.com/what-is-an-ethereum-address/
 * @param address - string representation of an address
 * @returns the same string branded as Address if it's a valid address
 */
export function parseAddress(address: string): Address {
  try {
    return addressSchema.parse(address)
  } catch (err) {
    throw new Error(`"${address}" is not an address. An address must be 42 characters hexadecimal number string.`)
  }
}
