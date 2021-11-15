import { expect, mockFn } from 'earljs'
import { Dictionary } from 'ts-essentials'

import { mockFilesystem } from '../../test/filesystemMock'
import { randomAddress } from '../../test/test-utils'
import { createEthSdkConfig, parseAddress } from '../config'
import { Abi, EthSdkCtx } from '../types'
import { constrain } from '../utils/constrain'
import { GetRpcProvider, RpcProvider } from './getRpcProvider'
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
      config: createEthSdkConfig({
        contracts,
        outputPath: 'outputPath',
        etherscanKey: etherscanKeyFixture,
        abiSource: 'etherscan',
      }),
      fs,
    }

    await gatherABIs(ctx, getAbi, (): RpcProvider => rpcProvider)

    expect(fs.test.isDirectory('workdirPath/abis/kovan')).toEqual(true)
    expect(fs.test.readJson('workdirPath/abis/kovan/dai.json')).toEqual(abi)
    expect(getAbi).toHaveBeenCalledWith(['kovan', contracts.kovan.dai])
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
      config: createEthSdkConfig({
        contracts,
        outputPath: 'outputPath',
        etherscanKey: etherscanKeyFixture,
      }),
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
    const getProvider = mockFn<GetRpcProvider>(() => ({
      ...rpcProvider,
      getCode: mockFn<RpcProvider['getCode']>().resolvesTo('0xfff'),
      getStorageAt: mockFn<RpcProvider['getStorageAt']>().resolvesTo(implementationAddr),
    }))

    await gatherABIs(ctx, getAbi, getProvider)

    expect(fs.test.readJson('workdirPath/abis/goerli/proxy.json')).toEqual(abis.implementation)
    expect(getProvider).toHaveBeenCalledWith([expect.anything(), 'goerli'])
  })

  it('does not call any rpc provider method when config.noFollowProxies is true', async () => {
    const fs = mockFilesystem({})
    const rpcProvider = {
      call: mockFn<RpcProvider['call']>().throws(new Error('.call should not be called')),
      getCode: mockFn<RpcProvider['getCode']>().throws(new Error('.getCode should not be called')),
      getStorageAt: mockFn<RpcProvider['getStorageAt']>().throws(new Error('.getStorageAt should not be called')),
    }

    const getAbi = mockFn((async () => []) as GetAbi)
    const ctx: EthSdkCtx = {
      cliArgs: { workingDirPath: 'workdirPath' },
      config: createEthSdkConfig({
        contracts: {
          kovan: {
            dai: parseAddress('0x6B175474E89094C44Da98b954EedeAC495271d0F'),
          },
        },
        noFollowProxies: true,
      }),
      fs,
    }

    await gatherABIs(ctx, getAbi, (): RpcProvider => rpcProvider)

    expect(fs.test.readJson('workdirPath/abis/kovan/dai.json')).toEqual([])
  })

  it('logs warning when rpc provider is not found', async () => {
    const _consoleWarn = console.warn
    const mockWarn = mockFn<typeof _consoleWarn>().returns(undefined)
    console.warn = mockWarn

    const ctx: EthSdkCtx = {
      cliArgs: { workingDirPath: 'workdirPath' },
      config: createEthSdkConfig({
        contracts: {
          kovan: {
            dai: parseAddress('0x6B175474E89094C44Da98b954EedeAC495271d0F'),
          },
        },
      }),
      fs: mockFilesystem({}),
    }

    const getProvider: GetRpcProvider = () => null

    await gatherABIs(ctx, async () => [], getProvider)

    expect(mockWarn).toHaveBeenCalledWith([
      expect.stringMatching(`Please add it to "config.rpc.kovan" to enable fetching proxy implementation ABIs`),
    ])

    console.warn = _consoleWarn
  })
})

const etherscanKeyFixture = 'CTX_CONFIG_ETHERSCAN_KEY'
