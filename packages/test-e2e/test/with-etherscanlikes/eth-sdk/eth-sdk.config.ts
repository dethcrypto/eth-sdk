import { defineConfig } from '../../../../eth-sdk/dist'

export default defineConfig({
  noFollowProxies: true,
  contracts: {
    optimism: {
      weth: '0x4200000000000000000000000000000000000006',
    },
    polygon: {
      weth: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
    },
    bsc: {
      WBNB: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    opera: {
      chainLink: '0xb3654dc3d10ea7645f8319668e8f54d2574fbdc8',
    },
    heco: {
      HBTC: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea',
    },
    avalanche: {
      WAVAX: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    },
    arbitrumOne: {
      GraphToken: '0x23a941036ae778ac51ab04cea08ed6e2fe103614',
    },
  },
  outputPath: 'sdk',
})
