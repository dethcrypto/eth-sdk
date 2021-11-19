import { defineConfig } from '@dethcrypto/eth-sdk'

export default defineConfig({
  contracts: {
    notRopstenAtAll: {
      // https://repo.sourcify.dev/contracts/full_match/3/0x0000A906D248Cc99FB8CB296C8Ad8C6Df05431c9/
      storage: '0x0000a906d248cc99fb8cb296c8ad8c6df05431c9',
    },
  },
  outputPath: './outDir',
  abiSource: 'sourcify',
  networkIds: {
    notRopstenAtAll: 3,
  },
  noFollowProxies: true,
})
