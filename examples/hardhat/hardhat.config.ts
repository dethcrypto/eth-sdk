require('dotenv').config()
import '@nomiclabs/hardhat-ethers'

import { HardhatUserConfig } from 'hardhat/config'

const config: HardhatUserConfig = {
  solidity: '0.8.4',
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: process.env.ARCHIVE_NODE_RPC_URL!,
        blockNumber: 13323323,
      },
    },
  },
}

export default config
