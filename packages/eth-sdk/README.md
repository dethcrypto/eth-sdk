<p align="center">
  <img src="https://github.com/dethcrypto/eth-sdk/blob/master/docs/logo.png?raw=true" width="100" alt="" role="presentation">
  <h3 align="center">eth-sdk</h3>
  <p align="center">Generate type-safe, lightweight SDK for your Ethereum smart contracts</p>
  <p align="center">The quickest and easiest way to interact with Ethereum</p>
  <p align="center">
    <a href="https://github.com/ethereum-ts/eth-sdk/actions"><img alt="Build Status" src="https://github.com/ethereum-ts/eth-sdk/workflows/CI/badge.svg"></a>
    <a href="/package.json"><img alt="Software License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square"></a>
    <a href="https://discord.gg/wQDkeDgzgv"><img alt="Join our discord!" src="https://img.shields.io/discord/895381864922091630.svg?color=7289da&label=deth&logo=discord&style=flat-square"></a>
  </p>
</p>

<h2>Features ⚡</h2>

- minimal - just provide addresses of contracts that you wish to interact with
- easy to use - ABIs will be automatically downloaded from Etherscan
- familiar API - Generates ethers.js contract wrappers
- type-safe - Leverages TypeChain for maximum type-safety

---

- [Installation](#installation)
- [Usage](#usage)
  - [CLI Options](#cli-options)
  - [Getting started](#getting-started)
  - [Configuration](#configuration)
    - [`contracts`](#contracts)
    - [`outputPath`](#outputpath)
    - [`etherscanKeys`](#etherscankeys)
    - [`etherscanURLs`](#etherscanurls)
    - [`rpc`](#rpc)
    - [`noFollowProxies`](#nofollowproxies)
    - [`abiSource`](#abisource)
    - [`networkIds`](#networkids)
- [Examples](#examples)
  - [Videos](#videos)
- [Motivation and use cases](#motivation-and-use-cases)
- [Contributing](#contributing)
- [License](#license)

# Installation

```
yarn add --dev @dethcrypto/eth-sdk @dethcrypto/eth-sdk-client
```

`eth-sdk` uses ethers.js and TypeScript, so these dependencies have to be installed as well.

# Usage

```bash
eth-sdk [options]
```

## CLI Options

Options:

- `-p, --path <path>` working directory (default: `./eth-sdk`)

  `eth-sdk` looks for the config file in this directory, and saves downloaded ABIs there.

## Getting started

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

## Configuration

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

### `contracts`

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

Predefined network identifiers are:

```
"mainnet"            "ropsten"            "rinkeby"
"goerli"             "kovan"              "bsc"
"bscTestnet"         "heco"               "hecoTestnet"
"opera"              "ftmTestnet"         "optimism"
"optimismKovan"      "polygon"            "polygonMumbai"
"arbitrumOne"        "arbitrumTestnet"
```

You can use other networks, but you will need to configure Etherscan URLs for them in [`etherscanURLs`](#etherscanurls)
or provide [`networkIds`](#networkids) when using Sourcify as `abiSource`.

### `outputPath`

Output directory for generated SDK.

**Defaults to `./node_modules/.dethcrypto/eth-sdk`**

```json
{
  "outputPath": "./node_modules/.dethcrypto/eth-sdk"
}
```

### `etherscanKeys`

Etherscan API keys

**Defaults to eth-sdk's own keys.**

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

### `etherscanURLs`

Key-value pairs of network identifier and Etherscan API URL to fetch ABIs from.

```json
{
  "etherscanURLs": {
    "helloworld": "https://api.etherscan.io/api"
  },
  "contracts": {
    "helloworld": {}
  }
}
```

### `rpc`

Configuration for Ethereum JSON-RPC provider needed for _following proxies_.

```json
{
  "rpc": {
    "mainnet": "https://mainnet.infura.io/v3/00000000000000000000000000000000",
    "kovan": "https://kovan.infura.io/v3/00000000000000000000000000000000"
  }
}
```

For every contract address, eth-sdk checks if it's a proxy, and if it is, it saves the ABI of the implementation
contract instead of the ABI of the proxy.

### `noFollowProxies`

You can opt out of proxy following by setting `noFollowProxies` flag in your config to `true`.

```json
{
  "noFollowProxies": true
}
```

### `abiSource`

_Default: `"etherscan"`_

One of `"etherscan"`, `"sourcify"`. Specifies the source to fetch contract ABIs from.

### `networkIds`

As Sourcify `/files` endpoint requires network identifier, you will need to provide one when using a custom network.

```json
{
  "abiSource": "sourcify",
  "networkIds": {
    "myNetwork": 3
  },
  "contracts": {
    "myNetwork": {
      "dai": "0x6b175474e89094c44da98b954eedeac495271d0f"
    }
  }
}
```

`eth-sdk` already knows ids of 19 commonly used networks, including mainnet, testnets, Optimism and Arbitrum, so you
won't need to provide them. You can find the list of all predefined networks in [`contracts`](#contracts) documentation.

# Examples

Check out examples of using `eth-sdk` in [`/examples`][examples] directory.

- [Hardhat example](https://github.com/dethcrypto/eth-sdk/tree/master/examples/hardhat)
- [Vite + React example](https://github.com/dethcrypto/eth-sdk/tree/master/examples/vite-react)

[examples]: https://github.com/dethcrypto/eth-sdk/tree/master/examples

## Videos

- [EthGlobal's DevSummit (2021)](https://www.youtube.com/watch?v=G5URGgZQ9do)

# Motivation and use cases

The primary motivation for the project is reducing the ceremony needed to interact with smart contracts on Ethereum
while using JavaScript or TypeScript. It takes care of boring parts like ABI management and auto-generates all the
boilerplate required to set up ethers.js contract instances. Finally, it makes DX great by ensuring that all contracts
have type information so your IDE can assist you.

It works well with all sorts of scripts, backend services, and even frontend apps. Note: If you develop smart contracts
it's better to use TypeChain directly (especially via HardHat integration).

# Contributing

Check out our [contributing guidelines](./CONTRIBUTING.md).

# License

deth (@dethcrypto) MIT
