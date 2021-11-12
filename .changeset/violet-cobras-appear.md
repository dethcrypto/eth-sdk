---
'@dethcrypto/eth-sdk': minor
---

Given an address to a proxy, eth-sdk now generates ethers Contract for implementation contract

As we need to call the chain to get the implementation contract address, two new config options are introduced. You can
specify Ethereum JSON-RPC endpoints in `config.rpc` and opt out from proxy following with `config.noFollowProxies`.
