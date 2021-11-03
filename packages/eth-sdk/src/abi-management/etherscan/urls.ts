import { NetworkID, UserProvidedNetworkSymbol } from '../networks'

// #region copied from hardhat-etherscan source
/** @see https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-etherscan/src/network/prober.ts */
export interface EtherscanURLs {
  apiURL: string
  browserURL: string
}

type NetworkId2Etherscan = {
  [networkID in NetworkID]: EtherscanURLs
}

export const networkIDtoEndpoints: NetworkId2Etherscan = {
  [NetworkID.MAINNET]: {
    apiURL: 'https://api.etherscan.io/api',
    browserURL: 'https://etherscan.io',
  },
  [NetworkID.ROPSTEN]: {
    apiURL: 'https://api-ropsten.etherscan.io/api',
    browserURL: 'https://ropsten.etherscan.io',
  },
  [NetworkID.RINKEBY]: {
    apiURL: 'https://api-rinkeby.etherscan.io/api',
    browserURL: 'https://rinkeby.etherscan.io',
  },
  [NetworkID.GOERLI]: {
    apiURL: 'https://api-goerli.etherscan.io/api',
    browserURL: 'https://goerli.etherscan.io',
  },
  [NetworkID.KOVAN]: {
    apiURL: 'https://api-kovan.etherscan.io/api',
    browserURL: 'https://kovan.etherscan.io',
  },
  [NetworkID.BSC]: {
    apiURL: 'https://api.bscscan.com/api',
    browserURL: 'https://bscscan.com',
  },
  [NetworkID.BSC_TESTNET]: {
    apiURL: 'https://api-testnet.bscscan.com/api',
    browserURL: 'https://testnet.bscscan.com',
  },
  [NetworkID.HECO]: {
    apiURL: 'https://api.hecoinfo.com/api',
    browserURL: 'https://hecoinfo.com',
  },
  [NetworkID.HECO_TESTNET]: {
    apiURL: 'https://api-testnet.hecoinfo.com/api',
    browserURL: 'https://testnet.hecoinfo.com',
  },
  [NetworkID.OPERA]: {
    apiURL: 'https://api.ftmscan.com/api',
    browserURL: 'https://ftmscan.com',
  },
  [NetworkID.FTM_TESTNET]: {
    apiURL: 'https://api-testnet.ftmscan.com/api',
    browserURL: 'https://testnet.ftmscan.com',
  },
  [NetworkID.OPTIMISTIC_ETHEREUM]: {
    apiURL: 'https://api-optimistic.etherscan.io/api',
    browserURL: 'https://optimistic.etherscan.io/',
  },
  [NetworkID.OPTIMISTIC_KOVAN]: {
    apiURL: 'https://api-kovan-optimistic.etherscan.io/api',
    browserURL: 'https://kovan-optimistic.etherscan.io/',
  },
  [NetworkID.POLYGON]: {
    apiURL: 'https://api.polygonscan.com/api',
    browserURL: 'https://polygonscan.com',
  },
  [NetworkID.POLYGON_MUMBAI]: {
    apiURL: 'https://api-testnet.polygonscan.com/api',
    browserURL: 'https://mumbai.polygonscan.com/',
  },
  [NetworkID.ARBITRUM_ONE]: {
    apiURL: 'https://api.arbiscan.io/api',
    browserURL: 'https://arbiscan.io/',
  },
  [NetworkID.ARBITRUM_TESTNET]: {
    apiURL: 'https://api-testnet.arbiscan.io/api',
    browserURL: 'https://testnet.arbiscan.io/',
  },
}
// #endregion copied from hardhat-etherscan source

export interface UserEtherscanURLs extends Record<UserProvidedNetworkSymbol, EtherscanURLs> {}
export interface UserEtherscanURLsInput extends Record<string, EtherscanURLs> {}
