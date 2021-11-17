import { ethers } from 'ethers'

import { env } from '../e2e-utils'
import { getNotRopstenAtAllSdk } from './outDir'

describe('with ABIs from Sourcify', () => {
  const provider = new ethers.providers.JsonRpcProvider(env.ROPSTEN_RPC)
  const signer = ethers.Wallet.createRandom().connect(provider)

  const sdk = getNotRopstenAtAllSdk(signer)

  it('generates instance for Storage.sol', async () => {
    const _stored = await sdk.storage.retreive()
  })
})
