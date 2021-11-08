import type { URLString } from '../../utils/utility-types'
import { NetworkID, UserProvidedNetworkSymbol } from '../networks'

type NetworkId2Etherscan = { [networkID in NetworkID]: URLString }

/**
 * This object is adapted from hardhat-etherscan source.
 * Refer to the following file to add new predefined networks:
 *
 * @see https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-etherscan/src/network/prober.ts
 */
export const networkIDtoEndpoints: NetworkId2Etherscan = {
  [NetworkID.MAINNET]: 'https://api.etherscan.io/api',
  [NetworkID.ROPSTEN]: 'https://api-ropsten.etherscan.io/api',
  [NetworkID.RINKEBY]: 'https://api-rinkeby.etherscan.io/api',
  [NetworkID.GOERLI]: 'https://api-goerli.etherscan.io/api',
  [NetworkID.KOVAN]: 'https://api-kovan.etherscan.io/api',
  [NetworkID.BSC]: 'https://api.bscscan.com/api',
  [NetworkID.BSC_TESTNET]: 'https://api-testnet.bscscan.com/api',
  [NetworkID.HECO]: 'https://api.hecoinfo.com/api',
  [NetworkID.HECO_TESTNET]: 'https://api-testnet.hecoinfo.com/api',
  [NetworkID.OPERA]: 'https://api.ftmscan.com/api',
  [NetworkID.FTM_TESTNET]: 'https://api-testnet.ftmscan.com/api',
  [NetworkID.OPTIMISTIC_ETHEREUM]: 'https://api-optimistic.etherscan.io/api',
  [NetworkID.OPTIMISTIC_KOVAN]: 'https://api-kovan-optimistic.etherscan.io/api',
  [NetworkID.POLYGON]: 'https://api.polygonscan.com/api',
  [NetworkID.POLYGON_MUMBAI]: 'https://api-testnet.polygonscan.com/api',
  [NetworkID.ARBITRUM_ONE]: 'https://api.arbiscan.io/api',
  [NetworkID.ARBITRUM_TESTNET]: 'https://api-testnet.arbiscan.io/api',
}

export interface UserEtherscanURLs extends Record<UserProvidedNetworkSymbol, URLString> {}
export interface UserEtherscanURLsInput extends Record<string, URLString> {}
