import { expect } from 'earljs'
import { assert } from 'ts-essentials'

import { EthSdkConfig, EthSdKContracts, parseAddress } from '.'
import { readConfig } from './readConfig'

// #region fixtures
const contractsFixture: EthSdKContracts = {
  mainnet: {
    dai: parseAddress('0x6b175474e89094c44da98b954eedeac495271d0f'),
  },
}

const configFixture: EthSdkConfig = {
  contracts: contractsFixture,
  outputPath: './node_modules/.dethcrypto/eth-sdk-client',
}
// #endregion fixtures

describe('readConfig', () => {
  it('reads contracts from JSON config and sets default outputPath', async () => {
    const filePath = './eth-sdk/config.json'

    const actual = await readConfig(
      filePath,
      mockRequire(filePath, {
        contracts: contractsFixture,
      }),
    )

    expect(actual).toEqual(configFixture)
  })

  it('fails on malformed config contents', async () => {
    const filePath = './eth-sdk/config.json'

    const promise = readConfig(
      filePath,
      mockRequire(filePath, {
        contracts: {
          // There should be a network object here.
          mkr: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
        },
      }),
    )

    await expect(promise).toBeRejected(expect.stringMatching('Network "mkr" is not supported.'))
  })

  it('reads contracts and outputPath from JavaScript config', async () => {
    const filePath = './eth-sdk/config.js'

    const actual = await readConfig(
      filePath,
      mockRequire(filePath, {
        contracts: {
          kovan: { mkr: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2' },
        },
        outputPath: './eth-sdk/client',
      }),
    )

    expect(actual).toEqual({
      contracts: {
        kovan: {
          mkr: parseAddress('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'),
        },
      },
      outputPath: './eth-sdk/client',
    })
  })
})

function mockRequire(filePath: string, result: unknown) {
  return (path: string) => {
    assert(path === filePath, `requireMock is expected to be called with ${filePath}`)
    return result
  }
}
