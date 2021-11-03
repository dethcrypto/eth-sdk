import got, { Response } from 'got'

import { Address } from '../../config'
import { NetworkSymbol, symbolToNetworkId, UserProvidedNetworkSymbol } from '../networks'
import { EtherscanURLs, networkIDtoEndpoints, UserEtherscanURLs } from './urls'

export async function getABIFromEtherscan(
  networkSymbol: NetworkSymbol,
  address: Address,
  apiKey: string,
  userNetworks: UserEtherscanURLs,
  fetch: FetchAbi = got,
): Promise<object> {
  const etherscanUrls = getEtherscanLinkFromNetworkSymbol(networkSymbol, userNetworks)
  if (!etherscanUrls) {
    throw new Error(`Can't find network info for ${networkSymbol}`)
  }

  const url = `${etherscanUrls.apiURL}?module=contract&action=getabi&address=${address}&apikey=${apiKey}`
  const rawResponse = await fetch(url)
  // @todo error handling for incorrect api keys
  const jsonResponse = JSON.parse(rawResponse.body)

  if (jsonResponse.status !== '1') {
    throw new Error(`Can't find mainnet abi for ${address}. Msg: ${rawResponse.body}`)
  }

  const abi = JSON.parse(jsonResponse.result)

  return abi
}

/**
 * @internal exported for tests only
 */
export type FetchAbi = (url: string) => Promise<Pick<Response<string>, 'body'>>

function getEtherscanLinkFromNetworkSymbol(
  networkSymbol: NetworkSymbol,
  userNetworks: UserEtherscanURLs,
): EtherscanURLs | undefined {
  if (isUserProvidedNetwork(networkSymbol, userNetworks)) {
    return userNetworks[networkSymbol]
  }

  const networkId = symbolToNetworkId[networkSymbol]

  return networkId && networkIDtoEndpoints[networkId]
}

function isUserProvidedNetwork(
  symbol: NetworkSymbol,
  userNetworks: UserEtherscanURLs,
): symbol is UserProvidedNetworkSymbol {
  return symbol in userNetworks
}
