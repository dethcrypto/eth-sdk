<p align="center">
  <img src="https://github.com/dethcrypto/eth-sdk/blob/master/docs/logo.png?raw=true" width="100" alt="" role="presentation">
  <h3 align="center">eth-sdk</h3>
  <p align="center">Generate type-safe, lightweight SDK for your Ethereum smart contracts</p>
  <p align="center">The quickest and easiest way to interact with Ethereum</p>
</p>

## Features ⚡

- minimal - just provide addresses of contracts that you wish to interact with
- easy to use - ABIs will be automatically downloaded from Etherscan
- familiar API - Generates ethers.js contract wrappers
- type-safe - Leverages TypeChain for maximum type-safety

## Installation

```
yarn add --dev @dethcrypto/eth-sdk @dethcrypto/eth-sdk-client
```

`eth-sdk` uses ethers.js and TypeScript, so these dependencies have to be installed as well.

## Usage

```bash
eth-sdk [options]
```

Options:

- `-p, --path <path>` Config root (default: `./eth-sdk`)

## Getting started

`eth-sdk` takes a JSON config file with ethereum addresses and generates a fully type-safe SDK that you can use right
away. The SDK is an object consisting of ethers.js contracts initialized with ABIs provided by etherscan and with types
generated via TypeChain.

The first step is to create a config file specifying contracts that we wish to interact with. Default path to this file
is `eth-sdk/config.ts`, but we also support `.json`, `.js` and `.cjs` extensions and `eth-sdk.config` base name.

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

## State of the project

The project is in a very experimental stage. Don't hesitate to create an issue / pull request helping to steer the
vision. Particularly things like input configuration are not set in stone (how should JSON config look like? should we
support `.yml` etc)
