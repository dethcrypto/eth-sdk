import Decoder from '@ethereum-sourcify/contract-call-decoder'
import got from 'got'

import { Address } from '..'
import { Abi } from '../types'
import { makeError } from '../utils/makeError'
import { PredefinedNetworkSymbol, symbolToNetworkId } from './networks'

/**
 * given networkSymbol and address we fetch from Sourcify HTTP endpoint GET /files/:chain/:address
 */
export const getAbiFromSourcifyHttp = async (networkSymbol: PredefinedNetworkSymbol, address: Address, fetch = got) => {
  const networkId = symbolToNetworkId[networkSymbol]

  const res = await fetch(`https://sourcify.dev/server/files/${networkId}/${address}`)

  try {
    if (res.statusCode !== 200) {
      throw new Error(res.body)
    }
    const body = JSON.parse(res.body) as unknown

    if (Array.isArray(body)) {
      const metadata = body.find(
        (file): file is { content: string } =>
          typeof file === 'object' && 'content' in file && file.name === 'metadata.json',
      )
      if (!metadata) {
        throw new Error('No metadata.json found in\n' + res.body)
      }

      const content = JSON.parse(metadata.content) as { output: { abi: Abi } }

      // @todo We'd probably prefer to save whole output to get tsdoc comments from NatSpec (already supported by TypeChain)
      //       I need to talk with @krzkaczor about it.
      return content.output.abi
    }
  } catch (err) {
    throw new Error('Failed to fetch abi from https://sourcify.dev\n' + makeError(err).message)
  }
}

export const getAbiFromSourcifyDecoder = async (networkSymbol: PredefinedNetworkSymbol, address: Address) => {
  // @todo TEMP: This will work only for mainnet, ropsten, goerli, rinkeby and kovan
  const rpcUrl = `https://${networkSymbol}.infura.io/v3/312214eeb0a045c8a55e165d512a026f`

  // The package is in ESM, but we use CJS in tests -.- not ideal.

  const decoder = new Decoder(rpcUrl)

  const deployedByteCode = await decoder.fetchDeployedByteCode(address)
  const metadataHash = Decoder.decodeMetadataHash(deployedByteCode)
  const metadata = decoder.fetchMetadataOutputWithHash(metadataHash)

  return metadata
}
