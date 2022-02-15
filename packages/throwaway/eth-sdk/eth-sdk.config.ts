import { defineConfig } from '@dethcrypto/eth-sdk'

export default defineConfig({
  contracts: {
    polygon: {
      weth: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
  },
}) as any
