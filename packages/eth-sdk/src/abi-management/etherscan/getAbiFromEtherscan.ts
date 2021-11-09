import got, { Response } from 'got'

import type { Address } from '../../config'
import type { Abi } from '../../types'
import type { URLString } from '../../utils/utility-types'
import { NetworkSymbol, symbolToNetworkId, UserProvidedNetworkSymbol } from '../networks'
import { networkIDtoEndpoints, UserEtherscanURLs } from './urls'

export async function getABIFromEtherscan(
  networkSymbol: NetworkSymbol,
  address: Address,
  apiKey: string,
  userNetworks: UserEtherscanURLs,
  fetch: FetchAbi = got,
): Promise<Abi> {
  const apiUrl = getEtherscanLinkFromNetworkSymbol(networkSymbol, userNetworks)
  if (!apiUrl) {
    throw new Error(`Can't find network info for ${networkSymbol}`)
  }

  const url = `${apiUrl}?module=contract&action=getabi&address=${address}&apikey=${apiKey}`
  const rawResponse = await fetch(url)
  // @todo error handling for incorrect api keys
  const jsonResponse = JSON.parse(rawResponse.body)

  if (jsonResponse.status !== '1') {
    throw new Error(`Can't find mainnet abi for ${address}. Msg: ${rawResponse.body}`)
  }

  const abi = JSON.parse(jsonResponse.result) as Abi

  return abi
}

/** @internal exported for tests only */
export type FetchAbi = (url: string) => Promise<Pick<Response<string>, 'body'>>

function getEtherscanLinkFromNetworkSymbol(
  networkSymbol: NetworkSymbol,
  userNetworks: UserEtherscanURLs,
): URLString | undefined {
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
