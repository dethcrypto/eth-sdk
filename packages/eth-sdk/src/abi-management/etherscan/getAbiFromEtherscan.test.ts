import { expect, mockFn } from 'earljs'
import { constants } from 'ethers'

import { parseAddress, UserEtherscanURLs } from '../../config'
import { FetchJson } from '../../peripherals/fetchJson'
import { Abi } from '../../types'
import { UserProvidedNetworkSymbol } from '../networks'
import { EtherscanResponse, getAbiFromEtherscan } from './getAbiFromEtherscan'

describe(getAbiFromEtherscan.name, () => {
  it('fetches from predefined etherscan URL', async () => {
    const apiKey = '{{ API_KEY }}'
    const fetch = mockEndpoint()
    const actual = await getAbiFromEtherscan(
      'mainnet',
      DAI_ADDRESS,
      { etherscanKey: apiKey, etherscanKeys: {}, etherscanURLs: {} },
      fetch,
    )

    expect(actual).toEqual(RETURNED_ABI)
    expect(fetch).toHaveBeenCalledWith([
      `https://api.etherscan.io/api?module=contract&action=getabi&address=${DAI_ADDRESS}&apikey=${apiKey}`,
    ])
  })

  it('fetches from user-specified URL', async () => {
    const symbol = UserProvidedNetworkSymbol('dethcryptoscan')
    const apiKey = 'woop'

    const etherscanURLs: UserEtherscanURLs = {
      [symbol]: 'https://dethcryptoscan.test/api/v1',
    }

    const fetch = mockEndpoint()

    const actual = await getAbiFromEtherscan(
      symbol,
      ADDRESS_ZERO,
      {
        etherscanKey: apiKey,
        etherscanURLs,
        etherscanKeys: { [symbol]: 'This should not be used if config.etherscanKey is specified.' },
      },
      fetch,
    )

    expect(actual).toEqual(RETURNED_ABI)
    expect(fetch).toHaveBeenCalledWith([
      `https://dethcryptoscan.test/api/v1?module=contract&action=getabi&address=${ADDRESS_ZERO}&apikey=${apiKey}`,
    ])
  })

  it('uses user-defined API keys', async () => {
    const fetch = mockEndpoint()

    const config = {
      etherscanURLs: {},
      etherscanKeys: { mainnet: 'one-mainnet-key', polygon: 'two-polygon-key' },
    }

    await getAbiFromEtherscan('mainnet', ADDRESS_ZERO, config, fetch)

    expect(fetch).toHaveBeenCalledWith([
      `https://api.etherscan.io/api?module=contract&action=getabi&address=${ADDRESS_ZERO}&apikey=one-mainnet-key`,
    ])

    await getAbiFromEtherscan('polygon', ADDRESS_ZERO, config, fetch)

    expect(fetch).toHaveBeenCalledWith([
      `https://api.polygonscan.com/api?module=contract&action=getabi&address=${ADDRESS_ZERO}&apikey=two-polygon-key`,
    ])
  })

  it('uses predefined API key', async () => {
    const fetch = mockEndpoint()

    const config = { etherscanURLs: {}, etherscanKeys: {} }

    await getAbiFromEtherscan('avalanche', ADDRESS_ZERO, config, fetch)

    expect(fetch).toHaveBeenCalledWith([
      `https://api.snowtrace.io/api?module=contract&action=getabi&address=${ADDRESS_ZERO}&apikey=IQEHAJ43W674REN5XV79WF47X37VEB8PIC`,
    ])
  })
})

const ADDRESS_ZERO = parseAddress(constants.AddressZero)
const DAI_ADDRESS = parseAddress('0x6B175474E89094C44Da98b954EedeAC495271d0F')

const RETURNED_ABI = ['{{ RETURNED_ABI }}'] as Abi
function mockEndpoint() {
  const fetch: FetchJson<EtherscanResponse> = async (_url) => ({
    status: '1',
    message: 'OK',
    result: JSON.stringify(RETURNED_ABI),
  })
  return mockFn(fetch)
}
