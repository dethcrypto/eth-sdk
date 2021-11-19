import { defineConfig } from '@dethcrypto/eth-sdk'

// We fork mainnet with Hardhat at block 13323323
const mainnetRpc = `http://localhost:${process.env.HH_NODE_PORT}/`

console.log('eth-sdk config loaded')
console.log('RPC URL:', mainnetRpc)

export default defineConfig({
  contracts: {
    mainnet: {
      tokens: {
        comp: '0xc00e94cb662c3520282e6f5717214004a7f26888',
      },
      compound: {
        comptroller: '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B',
        treasury: '0x2775b1c75658be0f640272ccb8c72ac986009e38',
      },
    },
  },
  rpc: {
    mainnet: mainnetRpc,
  },
})
