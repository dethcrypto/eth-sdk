// external types for user's autocomplete in config files

import type {
  AddressInput as Address,
  EthSdkConfigInput as EthSdkConfig,
  EthSdkContractsInput as EthSdkContracts,
  NestedAddressesInput as NestedAddresses,
  UserEtherscanURLsInput as EtherscanURLs,
} from './config'

export type { Address, EtherscanURLs, EthSdkConfig, EthSdkContracts, NestedAddresses }

export const defineConfig = (config: EthSdkConfig) => config
