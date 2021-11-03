import { expect, mockFn } from 'earljs'
import { constants } from 'ethers'

import { parseAddress, UserEtherscanURLs } from '../../config'
import { UserProvidedNetworkSymbol } from '../networks'
import { FetchAbi, getABIFromEtherscan } from './getAbiFromEtherscan'

describe(getABIFromEtherscan.name, () => {
  it('fetches from predefined etherscan URL', async () => {
    const apiKey = '{{ API_KEY }}'
    const fetch = mockEndpoint()
    const actual = await getABIFromEtherscan('mainnet', DAI_ADDRESS, apiKey, {}, fetch)

    expect(actual).toEqual(RETURNED_ABI)
    expect(fetch).toHaveBeenCalledWith([
      `https://api.etherscan.io/api?module=contract&action=getabi&address=${DAI_ADDRESS}&apikey=${apiKey}`,
    ])
  })

  it('fetches from user-specified URL', async () => {
    const symbol = UserProvidedNetworkSymbol('dethcryptoscan')
    const apiKey = 'woop'

    const userNetworks: UserEtherscanURLs = {
      [symbol]: {
        apiURL: 'https://dethcryptoscan.test/api/v1',
        browserURL: 'https://dethcryptoscan.test',
      },
    }

    const fetch = mockEndpoint()

    const actual = await getABIFromEtherscan(symbol, ADDRESS_ZERO, apiKey, userNetworks, fetch)

    expect(actual).toEqual(RETURNED_ABI)
    expect(fetch).toHaveBeenCalledWith([
      `https://dethcryptoscan.test/api/v1?module=contract&action=getabi&address=${ADDRESS_ZERO}&apikey=${apiKey}`,
    ])
  })
})

const ADDRESS_ZERO = parseAddress(constants.AddressZero)
const DAI_ADDRESS = parseAddress('0x6B175474E89094C44Da98b954EedeAC495271d0F')

const RETURNED_ABI = ['{{ RETURNED_ABI }}']
function mockEndpoint() {
  const fetch: FetchAbi = async (url) => ({
    body: JSON.stringify({
      status: '1',
      result: JSON.stringify(RETURNED_ABI),
    }),
  })
  return mockFn(fetch)
}
