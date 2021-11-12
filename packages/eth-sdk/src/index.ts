// external types for user's autocomplete in config files

import type {
  AbiSource,
  AddressInput as Address,
  EthSdkConfigInput as EthSdkConfig,
  EthSdkContractsInput as EthSdkContracts,
  NestedAddressesInput as NestedAddresses,
  RpcURLs,
  UserEtherscanURLsInput as EtherscanURLs,
} from './config'

export type { AbiSource, Address, EtherscanURLs, EthSdkConfig, EthSdkContracts, NestedAddresses, RpcURLs }

export const defineConfig = (config: EthSdkConfig) => config
