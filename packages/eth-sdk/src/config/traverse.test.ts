import { expect, mockFn } from 'earljs'
import { constants } from 'ethers'

import { traverseSdkDefinition } from './traverse'
import { EthSdKContracts, parseAddress } from './types'

describe('traverse', () => {
  it('traverses not-nested definitions', async () => {
    const def: EthSdKContracts = {
      mainnet: {
        dai: parseAddress(constants.AddressZero),
      },
    }

    const traverseSpy = mockFn().returns(undefined)

    await traverseSdkDefinition(def, traverseSpy)

    expect(traverseSpy).toHaveBeenCalledExactlyWith([['mainnet', ['dai'], constants.AddressZero]])
  })

  it('traverses nested definitions', async () => {
    const def: EthSdKContracts = {
      mainnet: {
        maker: {
          dai: parseAddress('0x6b175474e89094c44da98b954eedeac495271d0f'),
        },
        compound: {
          cDai: parseAddress('0x5d3a536e4d6dbd6114cc1ead35777bab948e3643'),
        },
      },
    }

    const traverseSpy = mockFn().returns(undefined)

    await traverseSdkDefinition(def, traverseSpy)

    expect(traverseSpy).toHaveBeenCalledExactlyWith([
      ['mainnet', ['maker', 'dai'], '0x6b175474e89094c44da98b954eedeac495271d0f'],
      ['mainnet', ['compound', 'cDai'], '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643'],
    ])
  })
})
