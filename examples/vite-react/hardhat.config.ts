require('@nomiclabs/hardhat-ethers') as typeof import('@nomiclabs/hardhat-ethers')

const { task } = require('hardhat/config') as typeof import('hardhat/config')

require('dotenv').config()

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(addressWithBalance(account, hre))
  }
})

const ALCHEMY_THROWAWAY_URL = 'https://eth-mainnet.alchemyapi.io/v2/Dr5usbY6KnDFmPBD-ky7I1J8DBny-i-G'

const config: import('hardhat/config').HardhatUserConfig = {
  solidity: {
    version: '0.8.7',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      forking: {
        url: ALCHEMY_THROWAWAY_URL,
        blockNumber: 13485726,
      },
    },
  },
}

module.exports = { default: config }

async function addressWithBalance(
  { address }: { address: string },
  hre: import('hardhat/types').HardhatRuntimeEnvironment,
) {
  const balance = await hre.ethers.provider.getBalance(address)
  return `${address} ${hre.ethers.utils.formatEther(balance)} ETH`
}
