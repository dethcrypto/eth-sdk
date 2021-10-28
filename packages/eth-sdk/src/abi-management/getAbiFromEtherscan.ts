import got from 'got'

import { Address } from '../sdk-def'

// @todo support user provided keys (especially important when to fight rate limiting)
const ETHERSCAN_KEY = 'WW2B6KB1FAXNTWP8EJQJYFTK1CMG1W4DWZ'

const networkToEndpoints = {
  mainnet: {
    apiURL: 'https://api.etherscan.io/api',
    browserURL: 'https://etherscan.io',
  },
  kovan: {
    apiURL: 'https://api-kovan.etherscan.io/api',
    browserURL: 'https://kovan.etherscan.io',
  },
  ropsten: {
    apiURL: 'https://api-ropsten.etherscan.io/api',
    browserURL: 'https://ropsten.etherscan.io',
  },
  rinkeby: {
    apiURL: 'https://api-rinkeby.etherscan.io/api',
    browserURL: 'https://rinkeby.etherscan.io',
  },
  goerli: {
    apiURL: 'https://api-goerli.etherscan.io/api',
    browserURL: 'https://goerli.etherscan.io',
  },
  'optimism-mainnet': {
    apiURL: 'https://api-optimistic.etherscan.io',
    browserURL: 'https://optimistic.etherscan.io/',
  },
  'optimism-kovan': {
    apiURL: 'https://api-kovan-optimistic.etherscan.io',
    browserURL: 'https://kovan-optimistic.etherscan.io/',
  },
}

export async function getABIFromEtherscan(network: string, address: Address): Promise<any> {
  const networkInfo = (networkToEndpoints as any)[network]
  if (!networkInfo) {
    throw new Error(`Can't find network info for ${network}`)
  }

  const url = `${networkInfo.apiURL}?module=contract&action=getabi&address=${address}&apikey=${ETHERSCAN_KEY}`
  const rawResponse = await got(url)
  // @todo error handling for incorrect api keys
  const jsonResponse = JSON.parse(rawResponse.body)

  if (jsonResponse.status !== '1') {
    throw new Error(`Can't find mainnet abi for ${address}. Msg: ${rawResponse.body}`)
  }

  const abi = JSON.parse(jsonResponse.result)

  return abi
}
