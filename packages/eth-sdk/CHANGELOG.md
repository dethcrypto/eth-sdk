# @dethcrypto/eth-sdk

## 0.3.0

### Minor Changes

- 56283f4: Update TypeChain to v7

## 0.2.4

### Patch Changes

- 6d9d72e: Allow duplicate contract names in different subtrees of a config

## 0.2.3

### Patch Changes

- 32ad0b4: Fix Proxy handling for USDC and other Openzeppelin proxy contracts

## 0.2.2

### Patch Changes

- 1b4f0ce: Fix: Custom network identifiers in `config.contracts` don't fail config validation anymore.
- 1b4f0ce: Fetch contract ABIs from Sourcify when `config.abiSource` is set to `"sourcify'`.

## 0.2.1

### Patch Changes

- 75c37b5: Add support for Avalanche networks (mainnet and fuji testnet)

## 0.2.0

### Minor Changes

- e68c2c9: Add support for all well known networks
- 3e32900: **Breaking Changes:**

  1. Config files can now be named `config` or `eth-sdk.config` instead of `contracts`. Supported extensions are `.js`,
     `.ts`, `.cjs` and `.json`.

  ```ts
  import { defineConfig } from '@dethcrypto/eth-sdk'

  export default defineConfig({
    contracts: {
      mainnet: {
        dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
      },
    },
    outputPath: './eth-sdk/client',
  })
  ```

  2. `--out` flag in CLI is no longer supported in favor of `config.outputPath`.

  **How to migrate?**

  Rename your `contracts.json` file to `config.json` and paste it's contents under "contracts" property.

  Before:

  ```json
  {
    "mainnet": {
      /* your contracts */
    }
  }
  ```

  After:

  ```json
  {
    "contracts": {
      "mainnet": {
        /* your contracts */
      }
    }
  }
  ```

- d00cfeb: Read custom Etherscan URLs from `"etherscanURLs"` property in config file
- d92585b: Given an address to a proxy, eth-sdk now generates ethers Contract for implementation contract

  As we need to call the chain to get the implementation contract address, two new config options are introduced. You
  can specify Ethereum JSON-RPC endpoints in `config.rpc` and opt out from proxy following with
  `config.noFollowProxies`.

### Patch Changes

- 6c0ae88: Emit ESModules alongside CommonJS
- 420987e: Updated dependencies. TypeChain upgrade causes change in emitted contract event types.
- bc0229a: We now read `etherscanKey` from the config file. eth-sdk's own key is still used when user doesn't pass their
  own.

## 0.1.6

### Patch Changes

- be9cdba: Fix bug in exported `MainnetSdk` type
