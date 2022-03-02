---
'@dethcrypto/eth-sdk': patch
---

eth-sdk now properly supports fetching ABI from multiple Etherscan-like blockchain explorers at the same time.

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
