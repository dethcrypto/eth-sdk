import { expect, mockFn } from 'earljs'

import { traverseSdkDefinition } from '../../src/config/traverse'
import { makeAddress, EthSdKContracts } from '../../src/config'

describe('traverse', () => {
  it('traverses not-nested definitions', async () => {
    const def: EthSdKContracts = {
      mainnet: {
        dai: makeAddress('0x123'),
      },
    }

    const traverseSpy = mockFn().returns(undefined)

    await traverseSdkDefinition(def, traverseSpy)

    expect(traverseSpy).toHaveBeenCalledExactlyWith([['mainnet', ['dai'], '0x123']])
  })

  it('traverses nested definitions', async () => {
    const def: EthSdKContracts = {
      mainnet: {
        maker: {
          dai: makeAddress('0x123'),
        },
        compound: {
          cDai: makeAddress('0x321'),
        },
      },
    }

    const traverseSpy = mockFn().returns(undefined)

    await traverseSdkDefinition(def, traverseSpy)

    expect(traverseSpy).toHaveBeenCalledExactlyWith([
      ['mainnet', ['maker', 'dai'], '0x123'],
      ['mainnet', ['compound', 'cDai'], '0x321'],
    ])
  })
})
