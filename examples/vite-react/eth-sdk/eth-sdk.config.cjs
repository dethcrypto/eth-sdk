// @ts-check
const { defineConfig } = require('@dethcrypto/eth-sdk')

module.exports = defineConfig({
  contracts: {
    mainnet: {
      dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
  },
})
