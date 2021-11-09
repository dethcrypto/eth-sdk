// @todo Legit unit tests.

import { Abi } from '../types'
import { detectProxy } from './detectProxy'

describe(detectProxy.name, () => {
  it('detects .implementation getter', async () => {
    const abi: Abi = [{ name: 'implementation', type: 'function', outputs: [{ type: 'address' }] }]
  })
})
