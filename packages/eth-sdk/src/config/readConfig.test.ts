import { expect } from 'earljs'
import { assert } from 'ts-essentials'

import { EthSdkConfig, EthSdKContracts, ethSdKContractsSchema, parseAddress } from '.'
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
  it('reads contracts from contracts.json', async () => {
    const filePath = './eth-sdk/contracts.json'

    const requireMock = mockRequire(filePath, contractsFixture)

    const actual = await readConfig(filePath, requireMock)
    expect(actual).toEqual(configFixture)
  })

  it('reads contracts from contracts.js', async () => {
    const filePath = './eth-sdk/contracts.json'
    const actual = await readConfig(filePath, mockRequire(filePath, contractsFixture))
    expect(actual).toEqual(configFixture)
  })

  it('reads contracts from config.json and sets default outputPath', async () => {
    const filePath = './eth-sdk/config.json'

    const actual = await readConfig(
      filePath,
      mockRequire(filePath, {
        contracts: contractsFixture,
      }),
    )

    expect(actual).toEqual(configFixture)
  })

  it.only('fails on malformed config.js contents', async () => {
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

    console.log('>>', ethSdKContractsSchema.parse((await promise).contracts))

    await expect(promise).toBeRejected('Dupa')
  })

  it('reads contracts and outputPath from config.js', async () => {
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
