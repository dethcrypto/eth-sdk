import { expect, mockFn } from 'earljs'
import { Dictionary } from 'ts-essentials'

import { mockFilesystem } from '../../test/filesystemMock'
import { randomAddress } from '../../test/test-utils'
import { parseAddress } from '../config'
import { Abi, EthSdkCtx } from '../types'
import { constrain } from '../utils/constrain'
import { RpcProvider } from './getRpcProvider'
import { gatherABIs, GetAbi } from './index'

const fs = mockFilesystem({})

describe(gatherABIs.name, () => {
  const rpcProvider = {
    call: mockFn<RpcProvider['call']>(),
    getCode: mockFn<RpcProvider['getCode']>(),
    getStorageAt: mockFn<RpcProvider['getStorageAt']>().resolvesTo('0x0'),
  }

  it('writes abi to output path', async () => {
    const abi: Abi = [
      {
        constant: true,
        inputs: [],
        name: 'name',
        outputs: [{ name: '', type: 'bytes32' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ]
    const getAbi = mockFn((async () => abi) as GetAbi)
    const contracts = {
      kovan: {
        dai: parseAddress('0x6B175474E89094C44Da98b954EedeAC495271d0F'),
      },
    }
    const ctx: EthSdkCtx = {
      cliArgs: { workingDirPath: 'workdirPath' },
      config: {
        contracts,
        outputPath: 'outputPath',
        etherscanKey: etherscanKeyFixture,
        etherscanURLs: {},
        rpcProvider: {
          endpoint: 'https://rpc-provider.test',
        },
      },
      fs,
    }

    await gatherABIs(ctx, getAbi, (): RpcProvider => rpcProvider)

    expect(fs.test.isDirectory('workdirPath/abis/kovan')).toEqual(true)
    expect(fs.test.readJson('workdirPath/abis/kovan/dai.json')).toEqual(abi)
    expect(getAbi).toHaveBeenCalledWith(['kovan', contracts.kovan.dai, etherscanKeyFixture, {}])
  })

  it('uses implementation abi instead of proxy abi', async () => {
    const implementationAddr = randomAddress('0x111')
    const contracts = {
      goerli: {
        proxy: randomAddress('0x222'),
      },
    }
    const ctx: EthSdkCtx = {
      cliArgs: { workingDirPath: 'workdirPath' },
      config: {
        contracts,
        outputPath: 'outputPath',
        etherscanKey: etherscanKeyFixture,
        etherscanURLs: {},
        rpcProvider: {
          endpoint: 'https://rpc-provider.test',
        },
      },
      fs,
    }
    const abis = constrain<Dictionary<Abi>>()({
      proxy: [{ name: 'i-am-proxy' }],
      implementation: [{ name: 'i-am-implementation' }],
    })
    const getAbi = mockFn((async (_net, addr) => {
      return {
        [contracts.goerli.proxy]: abis.proxy,
        [implementationAddr]: abis.implementation,
      }[addr]
    }) as GetAbi)

    await gatherABIs(
      ctx,
      getAbi,
      (): RpcProvider => ({
        ...rpcProvider,
        getCode: mockFn<RpcProvider['getCode']>().resolvesTo('0xfff'),
        getStorageAt: mockFn<RpcProvider['getStorageAt']>().resolvesTo(implementationAddr),
      }),
    )

    expect(fs.test.readJson('workdirPath/abis/goerli/proxy.json')).toEqual(abis.implementation)
  })
})

const etherscanKeyFixture = 'CTX_CONFIG_ETHERSCAN_KEY'
