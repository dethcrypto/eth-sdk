import { expect, mockFn } from 'earljs'
import proxyquire = require('proxyquire')
import { assert, noop } from 'ts-essentials'

import { EthSdkConfig, EthSdkConfigInput, EthSdkContracts, parseAddress } from '.'
import { readConfig } from './readConfig'

// #region fixtures
const contractsFixture: EthSdkContracts = {
  mainnet: {
    dai: parseAddress('0x6b175474e89094c44da98b954eedeac495271d0f'),
  },
}

const configFixture: EthSdkConfig = {
  contracts: contractsFixture,
  outputPath: './node_modules/.dethcrypto/eth-sdk-client',
  etherscanKey: 'CONFIG_ETHERSCAN_KEY',
  etherscanURLs: {},
  rpc: {},
  abiSource: 'etherscan',
}
// #endregion fixtures

describe('readConfig', () => {
  it('reads contracts from JSON config and sets default outputPath', async () => {
    const filePath = './eth-sdk/config.json'

    const actual = await readConfig(
      filePath,
      mockRequire(filePath, {
        contracts: contractsFixture,
        etherscanKey: 'CONFIG_ETHERSCAN_KEY',
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
          // @ts-expect-error There should be a network object here.
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
        abiSource: 'sourcify',
      }),
    )

    expect(actual).toEqual({
      contracts: {
        kovan: {
          mkr: parseAddress('0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2'),
        },
      },
      outputPath: './eth-sdk/client',
      etherscanKey: expect.stringMatching(''),
      etherscanURLs: {},
      rpc: {},
      abiSource: 'sourcify',
    })
  })

  it("calls ts-node's register when config is written in TypeScript", async () => {
    const register = mockFn().returns(undefined)

    const { readConfig } = proxyquire<typeof import('./readConfig')>('./readConfig', {
      'ts-node': { register },
    })

    const config = await readConfig('config.ts', mockRequire('config.ts', configFixture))

    expect(register).toHaveBeenCalledWith([{ compilerOptions: { module: 'CommonJS' } }])
    expect(config).toEqual(configFixture)
  })

  it('throws with meaningful error message when ts-node is not found', async () => {
    const { readConfig } = proxyquire<typeof import('./readConfig')>('./readConfig', {
      'ts-node': null,
    })

    await expect(readConfig('./eth-sdk/eth-sdk.config.ts', noop)).toBeRejected(
      'Could not read config file: ./eth-sdk/eth-sdk.config.ts\n' +
        'You need ts-node to write eth-sdk config in TypeScript.',
    )
  })
})

function mockRequire(filePath: string, result: EthSdkConfigInput) {
  return (path: string) => {
    assert(path === filePath, `requireMock is expected to be called with ${filePath}`)
    return result
  }
}
