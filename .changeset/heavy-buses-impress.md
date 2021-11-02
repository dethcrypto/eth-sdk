---
'@dethcrypto/eth-sdk': minor
---

**Breaking Changes:**

1. Config files can now be named `config` or `eth-sdk.config` instead of `contracts`. Supported extensions are `.js`, `.ts`, `.cjs` and `.json`.

  ```ts
  import { defineConfig } from '@dethcrypto/eth-sdk'

  export default defineConfig({
    contracts: {
      mainnet: {
        dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
      },
    },
    outputPath: './eth-sdk/client'
  });
  ```

2. `--out` flag in CLI is no longer supported in favor of `config.outputPath`.

**How to migrate?**

Rename your `contracts.json` file to `config.json` and paste it's contents under "contracts" property.

Before:

```json
{
  "mainnet": { /* your contracts */ }
}
```

After:

```json
{
  "contracts": {
    "mainnet": { /* your contracts */ }
  }
}
```
