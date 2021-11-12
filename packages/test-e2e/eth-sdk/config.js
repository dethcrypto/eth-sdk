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
        /**
         * transparent proxy pattern with standard storage slot
         * 0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc
         * @see https://eips.ethereum.org/EIPS/eip-1967#specification
         */
        proxyStandardStorageSlot: '0x1c5a768bdb10750f9007e33243fef5f3e094ad3a',
        /**
         * Etherscan calls this "custom proxy implementation"
         * We look getter name ending with "Implementation".
         */
        proxyCustomImplementation: '0x3d9819210a31b4961b30ef54be2aed79b9c9cd3b',
      },
    },
  },
  outputPath: 'test/sdk',
}

module.exports = config
