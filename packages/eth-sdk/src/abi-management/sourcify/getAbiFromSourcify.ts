import { Address } from '../../config'
import { FetchJson } from '../../peripherals/fetchJson'
import { Abi } from '../../types'
import { makeError } from '../../utils/makeError'
import { isUserProvidedNetwork, NetworkSymbol, symbolToNetworkId, UserProvidedNetworkSymbol } from './../networks'

/**
 * given networkSymbol and address we fetch from Sourcify HTTP endpoint GET /files/:chain/:address
 */
export const getAbiFromSourcify = async (
  networkSymbol: NetworkSymbol,
  address: Address,
  userNetworkIds: Record<UserProvidedNetworkSymbol, string>,
  fetch: FetchJson<SourcifyFile[]>,
): Promise<Abi> => {
  const networkId = isUserProvidedNetwork(networkSymbol, userNetworkIds)
    ? userNetworkIds[networkSymbol]
    : symbolToNetworkId[networkSymbol]

  const body = await fetch(`https://sourcify.dev/server/files/${networkId}/${address}`)

  try {
    if (Array.isArray(body)) {
      const metadata = body.find((file) => file.name === 'metadata.json')
      if (!metadata) {
        throw new Error('No metadata.json found in\n' + JSON.stringify(body, null, 2))
      }

      const content = JSON.parse(metadata.content) as { output: { abi: Abi } }

      // @todo We'd probably prefer to save whole output to get tsdoc comments
      // from NatSpec (already supported by TypeChain)
      return content.output.abi
    }

    throw new Error('Response from Sourcify is not array of files\n' + JSON.stringify(body, null, 2))
  } catch (err) {
    throw new Error('Failed to fetch abi from https://sourcify.dev\n' + makeError(err).message)
  }
}

/** @internal */
export interface SourcifyFile {
  name: string
  content: string
}
