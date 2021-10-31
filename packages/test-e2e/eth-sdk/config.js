// @ts-check
/** @type {import("@dethcrypto/eth-sdk").EthSdkConfig} */
const config = {
  contracts: {
    mainnet: {
      tokens: {
        dai: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        mkr: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
      },
      uniswap: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    },
  },
  outputPath: 'test/sdk',
}

module.exports = config
