import { expect } from 'earljs'
import { ethers } from 'ethers'
import { assert } from 'ts-essentials'

import { getMainnetSdk } from './sdk'

describe('sdk', () => {
  it('works', async () => {
    assert(process.env.E2E_RPC, 'E2E_RPC env missing')

    const provider = new ethers.providers.JsonRpcProvider(process.env.E2E_RPC)
    const signer = ethers.Wallet.createRandom().connect(provider)

    const sdk = await getMainnetSdk(signer)

    expect((await sdk.tokens.dai.totalSupply()).toString()).not.toEqual('0')
    expect((await sdk.tokens.mkr.totalSupply()).toString()).not.toEqual('0')
  })
})
