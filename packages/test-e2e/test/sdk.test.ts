import { assert, IsExact } from 'conditional-type-checks'
import { expect } from 'earljs'
import { ethers } from 'ethers'
import { assert as runtimeAssert } from 'ts-essentials'

import { getMainnetSdk, MainnetSdk } from './sdk'
import type { Dai, Mkr, Uniswap } from './sdk/types'

describe('sdk', () => {
  it('works', async () => {
    runtimeAssert(process.env.E2E_RPC, 'E2E_RPC env missing')

    const provider = new ethers.providers.JsonRpcProvider(process.env.E2E_RPC)
    const signer = ethers.Wallet.createRandom().connect(provider)

    const sdk = getMainnetSdk(signer)

    expect((await sdk.tokens.dai.totalSupply()).toString()).not.toEqual('0')
    expect((await sdk.tokens.mkr.totalSupply()).toString()).not.toEqual('0')

    // assert sdk shape
    assert<IsExact<MainnetSdk, typeof sdk>>(true)
    assert<IsExact<MainnetSdk, { tokens: { dai: Dai; mkr: Mkr }; uniswap: Uniswap }>>(true)
  })
})
