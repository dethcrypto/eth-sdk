import type { ZodString } from 'zod'
import { z } from 'zod'

import { networkIDtoSymbol, NetworkSymbol, symbolToNetworkId } from '../abi-management/networks'

const networkSymbolSchema = Object.values(networkIDtoSymbol).map((net) => z.literal(net))

export interface NestedAddresses {
  [name: string]: Address | NestedAddresses
}

const nestedAddressesSchema = z.lazy(() =>
  z.record(z.union([addressSchema, nestedAddressesSchema])),
) as z.ZodSchema<NestedAddresses>

export type EthSdKContracts = {
  [key in NetworkSymbol]?: NestedAddresses
}

export const ethSdKContractsSchema: z.ZodSchema<EthSdKContracts> = z.record(
  z.union(networkSymbolSchema as any as [ZodString, ZodString]),
  nestedAddressesSchema,
)

const ethSdkConfigSchema = z
  .object({
    contracts: ethSdKContractsSchema,
    outputPath: z.string().default('./node_modules/.dethcrypto/eth-sdk-client'),
  })
  .strict()

/**
 * Type of *parsed* eth-sdk config
 */
export interface EthSdkConfig extends z.infer<typeof ethSdkConfigSchema> {}

export function parseEthSdkConfig(data: unknown) {
  const res = ethSdkConfigSchema.safeParse(data)
  if (res.success) {
    return res.data
  } else {
    const message = 'Failed to parse eth-sdk config.'

    const [issue] = res.error.issues
    if (issue.code === 'invalid_union') {
      const [error] = issue.unionErrors[0].errors

      if (error.code === 'invalid_type' && error.expected in symbolToNetworkId) {
        throw new Error(
          message +
            '\n' +
            `Network "${error.received}" is not supported.\n` +
            'Supported networks are:' +
            Object.values(networkIDtoSymbol)
              .sort()
              .reduce((acc, net) => acc + `\n  - ${net}`, ''),
        )
      }
    }

    throw new Error(message + '\n' + res.error.toString())
  }
}

type Flavor<TValue, TBrand extends string> = TValue & { readonly __TYPE__?: TBrand }
// @todo @krzkaczor let's discuss this — I'm using Flavor with optional brand
// instead of Opaque here to allow exporting types for users.

export type Address = Flavor<`0x${string}`, 'address'>

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
  const res = addressSchema.safeParse(address)
  if (res.success) return res.data
  else {
    throw new Error(`"${address}" is not an address. An address must be 42 characters hexadecimal number string.`)
  }
}
