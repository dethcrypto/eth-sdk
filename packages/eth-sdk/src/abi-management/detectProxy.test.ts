import { Interface } from '@ethersproject/abi'
import { TransactionRequest } from '@ethersproject/abstract-provider'
import { expect, mockFn } from 'earljs'
import { constants } from 'ethers'

import { randomAddress } from '../../test/test-utils'
import { Abi } from '../types'
import {
  detectProxy,
  EIP1967_IMPLEMENTATION_STORAGE_SLOT,
  NUMBER_OF_KNOWN_STORAGE_SLOTS,
  ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT,
} from './detectProxy'
import type { RpcProvider } from './getRpcProvider'

describe(detectProxy.name, () => {
  const abiWithImplementationGetter: Abi = [
    { name: 'implementation', type: 'function', outputs: [{ type: 'address' }], stateMutability: 'view' },
  ]
  const proxyAddr = randomAddress('0x123')
  const implAddr = randomAddress('0x456')
  const implementationCall: TransactionRequest = {
    to: proxyAddr,
    data: new Interface(abiWithImplementationGetter).encodeFunctionData('implementation', []),
  }

  it('reads storage under EIP1967 implementation storage slot', async () => {
    const rpcProvider = {
      call: mockFn<RpcProvider['call']>(),
      getCode: mockFn<RpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorageAt: mockFn<RpcProvider['getStorageAt']>()
        .given(proxyAddr, EIP1967_IMPLEMENTATION_STORAGE_SLOT)
        .resolvesToOnce(implAddr),
    }
    const abi: Abi = []

    const actual = await detectProxy(proxyAddr, abi, rpcProvider)

    expect(actual).toEqual({ implAddress: implAddr, isProxy: true })
    expect(rpcProvider.getStorageAt).toHaveBeenCalledWith([proxyAddr, EIP1967_IMPLEMENTATION_STORAGE_SLOT])
  })

  it('reads storage under OpenZeppelin implementation storage slot', async () => {
    const rpcProvider = {
      call: mockFn<RpcProvider['call']>(),
      getCode: mockFn<RpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorageAt: mockFn<RpcProvider['getStorageAt']>()
        .resolvesTo(constants.AddressZero)
        .given(proxyAddr, ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT)
        .resolvesToOnce(implAddr),
    }
    const abi: Abi = []

    const actual = await detectProxy(proxyAddr, abi, rpcProvider)

    expect(actual).toEqual({ implAddress: implAddr, isProxy: true })
    expect(rpcProvider.getStorageAt).toHaveBeenCalledWith([proxyAddr, EIP1967_IMPLEMENTATION_STORAGE_SLOT])
    expect(rpcProvider.getStorageAt).toHaveBeenCalledWith([proxyAddr, ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT])
  })

  it('detects .implementation getter', async () => {
    const rpcProvider = {
      call: mockFn<RpcProvider['call']>().resolvesToOnce(implAddr),
      getCode: mockFn<RpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorageAt: mockFn<RpcProvider['getStorageAt']>().resolvesTo(constants.AddressZero),
    }

    const actual = await detectProxy(proxyAddr, abiWithImplementationGetter, rpcProvider)

    expect(actual).toEqual({
      implAddress: implAddr,
      isProxy: true,
    })
    expect(rpcProvider.getStorageAt.calls.length).toEqual(NUMBER_OF_KNOWN_STORAGE_SLOTS)
    expect(rpcProvider.call).toHaveBeenCalledWith([implementationCall])
    expect(rpcProvider.getCode).toHaveBeenCalledWith([implAddr])
  })

  it('returns { isProxy: false } when .implementation returns nothing', async () => {
    const rpcProvider = {
      call: mockFn<RpcProvider['call']>().resolvesToOnce(constants.AddressZero),
      getCode: mockFn<RpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorageAt: mockFn<RpcProvider['getStorageAt']>().resolvesTo(constants.AddressZero),
    }

    const actual = await detectProxy(proxyAddr, abiWithImplementationGetter, rpcProvider)

    expect(rpcProvider.getCode.calls.length).toEqual(0)
    expect(rpcProvider.getStorageAt.calls.length).toEqual(NUMBER_OF_KNOWN_STORAGE_SLOTS)
    expect(actual).toEqual({ isProxy: false })
  })

  it('returns { isProxy: false } when address from .implementation has no contract code', async () => {
    const rpcProvider = {
      call: mockFn<RpcProvider['call']>().resolvesToOnce(implAddr),
      getCode: mockFn<RpcProvider['getCode']>().given(implAddr).resolvesToOnce(constants.AddressZero),
      getStorageAt: mockFn<RpcProvider['getStorageAt']>().resolvesTo(constants.AddressZero),
    }

    const actual = await detectProxy(proxyAddr, abiWithImplementationGetter, rpcProvider)

    expect(rpcProvider.getStorageAt.calls.length).toEqual(NUMBER_OF_KNOWN_STORAGE_SLOTS)
    expect(actual).toEqual({ isProxy: false })
  })

  it('detects and calls custom implementation getters', async () => {
    const abi: Abi = [
      { name: 'currentImplementation', type: 'function', outputs: [{ type: 'address' }], stateMutability: 'view' },
      {
        name: 'pendingCurrentImplementation',
        type: 'function',
        outputs: [{ type: 'address' }],
        stateMutability: 'view',
      },
    ]
    const rpcProvider = {
      call: mockFn<RpcProvider['call']>()
        .given({ to: proxyAddr, data: new Interface(abi).encodeFunctionData('currentImplementation', []) })
        .resolvesToOnce(implAddr),
      getCode: mockFn<RpcProvider['getCode']>().resolvesToOnce('0xfff'),
      getStorageAt: mockFn<RpcProvider['getStorageAt']>().resolvesTo(constants.AddressZero),
    }

    const actual = await detectProxy(proxyAddr, abi, rpcProvider)
    expect(actual).toEqual({
      implAddress: implAddr,
      isProxy: true,
    })
  })
})
