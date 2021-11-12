import type { Opaque } from 'ts-essentials'
import type { ZodString, ZodTypeDef } from 'zod'
import { z } from 'zod'

import type { UserEtherscanURLs, UserEtherscanURLsInput } from '../abi-management/etherscan/urls'
import { networkIDtoSymbol, NetworkSymbol, symbolToNetworkId } from '../abi-management/networks'
import { NestedDict } from '../utils/utility-types'

export type { UserEtherscanURLs, UserEtherscanURLsInput }

const DEFAULT_OUTPUT_PATH = './node_modules/.dethcrypto/eth-sdk-client'
const DEFAULT_ETHERSCAN_KEY = 'WW2B6KB1FAXNTWP8EJQJYFTK1CMG1W4DWZ'
const DEFAULT_ABI_SOURCE: AbiSource = 'etherscan'

const networkSymbolSchema = Object.values(networkIDtoSymbol).map((net) => z.literal(net))

export type AddressInput = `0x${string}`

/** @internal */
export type Address = Opaque<AddressInput, 'Address'>

const ADDRESS_ERROR_MESSAGE = 'An address must be 42 characters hexadecimal number string.'
const addressSchema: z.ZodType<Address, ZodTypeDef, AddressInput> = z
  .string()
  .length(42, { message: ADDRESS_ERROR_MESSAGE })
  .regex(/^0x[0-9a-fA-F]+$/, { message: ADDRESS_ERROR_MESSAGE }) as any

/**
 * @see https://info.etherscan.com/what-is-an-ethereum-address/
 * @param address - string representation of an address
 * @returns the same string branded as Address if it's a valid address
 */
export function parseAddress(address: string): Address {
  const res = addressSchema.safeParse(address)
  if (res.success) return res.data
  else {
    const errorCode = res.error.issues[0].code
    throw new Error(`"${address}" is not an address. ${ADDRESS_ERROR_MESSAGE} (${errorCode})`)
  }
}

export type NestedAddresses = NestedDict<Address>
export type NestedAddressesInput = NestedDict<AddressInput>

const nestedAddressesSchema = z.lazy(() => z.record(z.union([addressSchema, nestedAddressesSchema]))) as z.ZodSchema<
  NestedAddresses,
  ZodTypeDef,
  NestedAddressesInput
>

export type EthSdkContracts = { [key in NetworkSymbol]?: NestedAddresses }
export type EthSdkContractsInput = { [key in NetworkSymbol]?: NestedAddressesInput }

export const ethSdKContractsSchema: z.ZodSchema<EthSdkContracts, ZodTypeDef, EthSdkContractsInput> = z.record(
  z.union(networkSymbolSchema as any as [ZodString, ZodString]),
  nestedAddressesSchema,
)

const etherscanURLsSchema: z.ZodSchema<UserEtherscanURLs, ZodTypeDef, UserEtherscanURLsInput> = z.record(
  z.string(),
) as any

export type RpcURLs = { [key in NetworkSymbol]?: string }

const rpcUrlsSchema: z.ZodSchema<RpcURLs> = z.record(z.string())

const abiSourceSchema = z.union([z.literal('etherscan'), z.literal('sourcify')])
export type AbiSource = z.infer<typeof abiSourceSchema>

const ethSdkConfigSchema = z
  .object({
    contracts: ethSdKContractsSchema,
    outputPath: z.string().default(DEFAULT_OUTPUT_PATH),
    etherscanKey: z.string().default(DEFAULT_ETHERSCAN_KEY),
    etherscanURLs: etherscanURLsSchema.default({}),
    rpc: rpcUrlsSchema.default({}),
    noFollowProxies: z.boolean().optional(),
    abiSource: abiSourceSchema.default(DEFAULT_ABI_SOURCE),
  })
  .strict()

/**
 * Type of *parsed* eth-sdk config.
 * @internal
 */
export interface EthSdkConfig extends z.infer<typeof ethSdkConfigSchema> {}

// We expose this for users under `EthSdkConfig` name.
/**
 * Type of eth-sdk config file contents.
 */
export type EthSdkConfigInput = z.input<typeof ethSdkConfigSchema>

export function parseEthSdkConfig(data: unknown) {
  const res = ethSdkConfigSchema.safeParse(data)
  if (res.success) {
    return res.data
  } else {
    const message = 'Failed to parse eth-sdk config'

    const [issue] = res.error.issues
    if (issue.code === 'invalid_union') {
      const [error] = issue.unionErrors[0].errors

      if (error.code === 'invalid_type' && error.expected in symbolToNetworkId) {
        throw new Error(
          message +
            '.\n' +
            `Network "${error.received}" is not supported.\n` +
            'Supported networks are:' +
            Object.values(networkIDtoSymbol)
              .sort()
              .reduce((acc, net) => acc + `\n  - ${net}`, ''),
        )
      }
    }

    throw new Error(
      message +
        ':\n' +
        res.error.issues.map((issue) => `${issue.code} at "${issue.path.join('.')}": ${issue.message}`).join('\n'),
    )
  }
}

/** @internal */
export const createEthSdkConfig: (config: EthSdkConfigInput) => EthSdkConfig = parseEthSdkConfig
