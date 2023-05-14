import type { URLString } from '../../utils/utility-types'
import { NetworkSymbol, PredefinedNetworkSymbol, UserProvidedNetworkSymbol } from '../networks'

const ETHERSCAN_KEY = 'WW2B6KB1FAXNTWP8EJQJYFTK1CMG1W4DWZ'
const OPTIMISM_KEY = 'UF822UT1YY28J5EHFFIKI5SPN8752AC7VV'
const BSCSCAN_KEY = 'HFUM7BBA5MRUQCN5UMEQPUZBUPPRHIQT3Y'
const FTMSCAN_KEY = 'EH9NPZVF1HMNAQMAUZKA4VF7EC23X37DGS'
const HECOINFO_KEY = 'XEUTJF2439EP4HHD23H2AFEFQJHFGSG57R'
const SNOWTRACE_KEY = 'IQEHAJ43W674REN5XV79WF47X37VEB8PIC'
const ARBISCAN_KEY = 'X3ZWJBXC14HTIR3B9DNYGEUICEIKKZ9ENZ'
const POLYGONSCAN_KEY = 'RV4YXDXEMIHXMC7ZXB8T82G4F56FRZ1SZQ'

/**
 * Refer to the following file to add new predefined networks:
 * @see https://github.com/nomiclabs/hardhat/blob/master/packages/hardhat-etherscan/src/network/prober.ts
 */
export const predefinedExplorerEndpoints: PredefinedExplorerEndpoints = {
  mainnet: {
    url: 'https://api.etherscan.io/api',
    apiKey: ETHERSCAN_KEY,
  },
  ropsten: {
    url: 'https://api-ropsten.etherscan.io/api',
    apiKey: ETHERSCAN_KEY,
  },
  rinkeby: {
    url: 'https://api-rinkeby.etherscan.io/api',
    apiKey: ETHERSCAN_KEY,
  },
  goerli: {
    url: 'https://api-goerli.etherscan.io/api',
    apiKey: ETHERSCAN_KEY,
  },
  sepolia: {
    url: 'https://api-sepolia.etherscan.io/api',
    apiKey: ETHERSCAN_KEY,
  },
  kovan: {
    url: 'https://api-kovan.etherscan.io/api',
    apiKey: ETHERSCAN_KEY,
  },
  optimism: {
    url: 'https://api-optimistic.etherscan.io/api',
    apiKey: OPTIMISM_KEY,
  },
  optimismKovan: {
    url: 'https://api-kovan-optimistic.etherscan.io/api',
    apiKey: OPTIMISM_KEY,
  },
  arbitrumOne: {
    url: 'https://api.arbiscan.io/api',
    apiKey: ARBISCAN_KEY,
  },
  arbitrumTestnet: {
    url: 'https://api-testnet.arbiscan.io/api',
    apiKey: ARBISCAN_KEY,
  },
  bsc: {
    url: 'https://api.bscscan.com/api',
    apiKey: BSCSCAN_KEY,
  },
  bscTestnet: {
    url: 'https://api-testnet.bscscan.com/api',
    apiKey: BSCSCAN_KEY,
  },
  heco: {
    url: 'https://api.hecoinfo.com/api',
    apiKey: HECOINFO_KEY,
  },
  hecoTestnet: {
    url: 'https://api-testnet.hecoinfo.com/api',
    apiKey: HECOINFO_KEY,
  },
  opera: {
    url: 'https://api.ftmscan.com/api',
    apiKey: FTMSCAN_KEY,
  },
  ftmTestnet: {
    url: 'https://api-testnet.ftmscan.com/api',
    apiKey: FTMSCAN_KEY,
  },
  polygon: {
    url: 'https://api.polygonscan.com/api',
    apiKey: POLYGONSCAN_KEY,
  },
  polygonMumbai: {
    url: 'https://api-testnet.polygonscan.com/api',
    apiKey: POLYGONSCAN_KEY,
  },
  avalanche: {
    url: 'https://api.snowtrace.io/api',
    apiKey: SNOWTRACE_KEY,
  },
  fuji: {
    url: 'https://api-testnet.snowtrace.io/api',
    apiKey: SNOWTRACE_KEY,
  },
}

interface PredefinedExplorerEndpoints extends Record<PredefinedNetworkSymbol, ExplorerEndpointConfig> {}

/** @internal */
export interface ExplorerEndpointConfig {
  url: URLString
  apiKey: string
}

export interface UserEtherscanURLs extends Record<UserProvidedNetworkSymbol, URLString> {}
export type UserEtherscanKeys = { [P in NetworkSymbol]?: string }
export interface UserEtherscanURLsInput extends Record<string, URLString> {}
