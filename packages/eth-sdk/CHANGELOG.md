# @dethcrypto/eth-sdk

## 0.3.3

### Patch Changes

- cd56037: TypeChain flags can be via eth-sdk config.

## 0.3.2

### Patch Changes

- bd0c2c6: Fixed name clashes within emitted types.

  _eth-sdk now depends on `typechain` v8 and `@typechain/ethers-v5` v10._

- 0ed5510: Allow using `Provider` alongside `Signer` for readonly queries
- 10ebea1: eth-sdk will now retry up to 2 times on HTTP403 Forbidden when fetching ABI

## 0.3.1

### Patch Changes

- 4b64b0f: eth-sdk now properly supports fetching ABI from multiple Etherscan-like blockchain explorers at the same
  time.

  Previously, `config.etherscanKey` option was used for all APIs, what worked in some cases, but broke with Polygonscan.

  You can now provide your Etherscan API keys like this:

  ```json
  {
    "etherscanKeys": {
      // API key for https://etherscan.io
      "mainnet": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      // API key for https://polygonscan.com
      "polygon": "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"
    }
  }
  ```

  If not specified, eth-sdk will use its own API keys.

  ⚠ `config.etherscanKey` option is now deprecated in favor of `etherscanKey`**`s`** option.

  _This is a hotfix solution as a future version of eth-sdk will radically simplify config schema._

- 4b64b0f: The network name is now shown properly when fetching ABI from Etherscan fails

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
