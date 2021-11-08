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
      proxies: {
        // 'withImplementation': '',
        /**
         * transparent proxy pattern
         * @see https://eips.ethereum.org/EIPS/eip-1967#implementation
         */
        with_implementation: '0x1c5a768bdb10750f9007e33243fef5f3e094ad3a',
        // '.0x360894': '',
        /** custom proxy */
        withComptrollerImplementation: '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b',
      },
    },
  },
  outputPath: 'test/sdk',
}

module.exports = config
