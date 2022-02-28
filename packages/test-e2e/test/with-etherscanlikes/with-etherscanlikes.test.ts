import { assert } from 'conditional-type-checks'
import { expect } from 'earljs'
import { ethers } from 'ethers'

import * as sdk from './sdk'
import type * as types from './sdk/types'

type Extends<T, U> = T extends U ? true : false

describe('with other Etherscan-like explorers', () => {
  const provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com')
  const signer = ethers.Wallet.createRandom().connect(provider)

  it('has generated an sdk using a working set of predefined API keys', async () => {
    assert<
      Extends<
        typeof sdk,
        {
          getOptimismSdk: (signer: ethers.Signer) => { weth: types.Weth }
          getPolygonSdk: (signer: ethers.Signer) => { weth: types.Weth }
          getBscSdk: (signer: ethers.Signer) => { WBNB: types.WBNB }
          getOperaSdk: (signer: ethers.Signer) => { chainLink: types.ChainLink }
          getHecoSdk: (signer: ethers.Signer) => { HBTC: types.HBTC }
          getAvalancheSdk: (signer: ethers.Signer) => { WAVAX: types.WAVAX }
          getArbitrumOneSdk: (signer: ethers.Signer) => { GraphToken: types.GraphToken }
        }
      >
    >(true)

    const polygon = sdk.getPolygonSdk(signer)
    expect(polygon.weth.address).toEqual('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619')
    expect(await polygon.weth.ERC712_VERSION()).toEqual('1')
  })
})
