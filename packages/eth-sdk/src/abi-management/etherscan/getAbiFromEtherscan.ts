import type { Address } from '../../config'
import { FetchJson } from '../../peripherals/fetchJson'
import type { Abi } from '../../types'
import type { URLString } from '../../utils/utility-types'
import { isUserProvidedNetwork, NetworkSymbol } from '../networks'
import {
  ExplorerEndpointConfig,
  predefinedExplorerEndpoints,
  UserEtherscanKeys,
  UserEtherscanURLs,
} from './explorerEndpoints'

export async function getAbiFromEtherscan(
  networkSymbol: NetworkSymbol,
  address: Address,
  config: EtherscanConfig,
  fetch: FetchJson<EtherscanResponse>,
): Promise<Abi> {
  const url = createAPIUrl(networkSymbol, address, config)
  // @todo error handling for incorrect api keys
  const response = await fetch(url)

  if (response.status !== '1' && response.status !== 1) {
    throw new Error(`Can't find ${networkSymbol} ABI for ${address}. Msg: ${JSON.stringify(response, null, 2)}`)
  }

  const abi = JSON.parse(response.result) as Abi

  return abi
}

function createAPIUrl(
  networkSymbol: NetworkSymbol,
  address: Address,
  { etherscanKeys, etherscanURLs, etherscanKey }: EtherscanConfig,
) {
  const apiKey =
    etherscanKey ||
    etherscanKeys[networkSymbol] ||
    (predefinedExplorerEndpoints as { [K in string]?: ExplorerEndpointConfig })[networkSymbol]?.apiKey

  const apiUrl = getEtherscanLinkFromNetworkSymbol(networkSymbol, etherscanURLs)
  if (!apiUrl) {
    throw new Error(`Can't find network info for ${networkSymbol}`)
  }

  return `${apiUrl}?module=contract&action=getabi&address=${address}${apiKey ? `&apikey=${apiKey}` : ''}`
}

function getEtherscanLinkFromNetworkSymbol(
  networkSymbol: NetworkSymbol,
  userNetworks: UserEtherscanURLs,
): URLString | undefined {
  if (isUserProvidedNetwork(networkSymbol, userNetworks)) {
    return userNetworks[networkSymbol]
  }

  return predefinedExplorerEndpoints[networkSymbol].url
}

/**
 * @see https://docs.etherscan.io/api-endpoints/contracts
 */
export interface EtherscanResponse {
  status: string | number // NOTE: sometimes it's a string, sometimes it's a number
  result: string
  message: 'OK' | 'NOTOK'
}

interface EtherscanConfig {
  etherscanKey?: string | undefined
  etherscanKeys: UserEtherscanKeys
  etherscanURLs: UserEtherscanURLs
}
