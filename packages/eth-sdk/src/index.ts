// external types for user's autocomplete in config files

import type {
  AddressInput as Address,
  EthSdkConfigInput as EthSdkConfig,
  EthSdkContractsInput as EthSdkContracts,
  NestedAddressesInput as NestedAddresses,
} from './config'

export type { Address, EthSdkConfig, EthSdkContracts, NestedAddresses }

export const defineConfig = (config: EthSdkConfig) => config
