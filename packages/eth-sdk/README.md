<p align="center">
  <img src="https://github.com/dethcrypto/eth-sdk/blob/master/docs/logo.png?raw=true" width="100" alt="" role="presentation">
  <h3 align="center">eth-sdk</h3>
  <p align="center">Generate type-safe, lightweight SDK for your Ethereum smart contracts</p>
  <p align="center">The quickest and easiest way to interact with Ethereum</p>
</p>

<h2>Features ⚡</h2>

- minimal - just provide addresses of contracts that you wish to interact with
- easy to use - ABIs will be automatically downloaded from Etherscan
- familiar API - Generates ethers.js contract wrappers
- type-safe - Leverages TypeChain for maximum type-safety

---

# <<<<<<< HEAD

- [Features ⚡](#features-)
  > > > > > > > 0a2e054 (Draft configuration reference in README)
- [<<<<<<< HEAD](#-head)
  - [Installation](#installation)
  - [Usage](#usage)
    - [CLI Options](#cli-options)
    - [Getting started](#getting-started)
    - [Configuration](#configuration)
      - [`contracts`](#contracts)
      - [`outputPath`](#outputpath)
      - [`etherscanKey`](#etherscankey)
  - [Examples](#examples)
  - [Motivation and use cases](#motivation-and-use-cases)
  - [Configuration](#configuration-1)
  - [State of the project](#state-of-the-project)

---

## Installation

```
yarn add --dev @dethcrypto/eth-sdk @dethcrypto/eth-sdk-client
```

`eth-sdk` uses ethers.js and TypeScript, so these dependencies have to be installed as well.

## Usage

```bash
eth-sdk [options]
```

### CLI Options

Options:

- `-p, --path <path>` working directory (default: `./eth-sdk`)

  `eth-sdk` looks for the config file in this directory, and saves downloaded ABIs there.

### Getting started

`eth-sdk` takes a JSON config file with ethereum addresses and generates a fully type-safe SDK that you can use right
away. The SDK is an object consisting of ethers.js contracts initialized with ABIs provided by etherscan and with types
generated via TypeChain.

The first step is to create a config file specifying contracts that we wish to interact with. Default path to this file
is `eth-sdk/config.ts`.

```ts
import { defineConfig } from '@dethcrypto/eth-sdk'

export default defineConfig({
  contracts: {
    mainnet: {
      dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
  },
})
```

The key directly under `"contracts"` is a network identifier, `eth-sdk` needs it to query ABI information automatically.
Following are key-value pairs of contract names and addresses. These can be deeply nested.

Now you're ready to run `yarn eth-sdk`. Few things will happen under the hood:

1. Etherscan API will be queried in search of ABIs corresponding to the addresses. ABIs will be downloaded into
   `eth-sdk` directory (you should commit them to git to speed up the process in the future).
2. Minimal SDK will be generated with functions like `getMainnetSdk` exposed. These functions wire addresses with ABIs
   and create ethers.js contract instances.
3. TypeScript types will be generated for SDK using TypeChain.
4. SDK is generated directly into `node_modules`, access it as `@dethcrypto/eth-sdk-client`.

Using generated sdk is as simple as it gets:

```typescript
import { getMainnetSdk } from '@dethcrypto/eth-sdk-client' // yay, our SDK! It's tailored especially for our needs
import { ethers } from 'ethers'

async function main() {
  const mainnetProvider = ethers.getDefaultProvider('mainnet')
  const defaultSigner = ethers.Wallet.createRandom().connect(mainnetProvider)

  const sdk = getMainnetSdk(defaultSigner) // default signer will be wired with all contract instances
  // sdk is an object like { dai: DaiContract }

  const balance = sdk.dai.balanceOf(defaultSigner.address)
}

main()
  .then(() => console.log('DONE'))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
```

### Configuration

`eth-sdk` looks for a file named `config` or `eth-sdk.config` with `.ts`, `.json`, `.js` or `.cjs` extension inside of
the directory specified by `--path` CLI argument.

You can use exports from `@dethcrypto/eth-sdk` to leverage your IDE's intellisense. Exported types are `EthSdkConfig`,
`EthSdkContracts`, `NestedAddresses` and `Address`.

```ts
import type { EthSdkConfig } from '@dethcrypto/eth-sdk'
const config: EthSdkConfig = {
  // ...
}
export default config
```

Alternatively, you can use `defineConfig` function to write your config in a typesafe way without need for annotations.

```ts
import { defineConfig } from '@dethcrypto/eth-sdk'
export default defineConfig({
  // ...
})
```

#### `contracts`

A map from network identifier into deeply nested key-value pairs of contract names and addresses.

```json
{
  "contracts": {
    "mainnet": {
      "dai": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "dao": {
        "mkr": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2"
      }
    }
  }
}
```

Supported network identifiers are:

```
"mainnet"            "ropsten"            "rinkeby"
"goerli"             "kovan"              "bsc"
"bscTestnet"         "heco"               "hecoTestnet"
"opera"              "ftmTestnet"         "optimism"
"optimismKovan"      "polygon"            "polygonMumbai"
"arbitrumOne"        "arbitrumTestnet"
```

#### `outputPath`

Output directory for generated SDK.

**Defaults to `./node_modules/.dethcrypto/eth-sdk`**

```json
{
  "outputPath": "./node_modules/.dethcrypto/eth-sdk"
}
```

#### `etherscanKey`

Etherscan API key.

**Defaults to eth-sdk's own key.**

```json
{
  "etherscanKey": "ZWD4W1GTHISTFYJWONTPWTNXAFWORKB2WW"
}
```

## Examples

Check out examples of using `eth-sdk` in [`/examples`][examples] directory.

- [Hardhat example](https://github.com/dethcrypto/eth-sdk/tree/master/examples/hardhat)
- [Vite + React example](https://github.com/dethcrypto/eth-sdk/tree/master/examples/vite-react)

[examples]: https://github.com/dethcrypto/eth-sdk/tree/master/examples

## Motivation and use cases

The primary motivation for the project is reducing the ceremony needed to interact with smart contracts on Ethereum
while using JavaScript or TypeScript. It takes care of boring parts like ABI management and auto-generates all the
boilerplate required to set up ethers.js contract instances. Finally, it makes DX great by ensuring that all contracts
have type information so your IDE can assist you.

It works well with all sorts of scripts, backend services, and even frontend apps. Note: If you develop smart contracts
it's better to use TypeChain directly (especially via HardHat integration).

## Configuration

## State of the project

The project is in a very experimental stage. Don't hesitate to create an issue / pull request helping to steer the
vision. Particularly things like input configuration are not set in stone (how should JSON config look like? should we
support `.yml` etc)
