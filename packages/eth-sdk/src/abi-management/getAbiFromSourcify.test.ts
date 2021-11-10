import { expect } from 'earljs'

import { parseAddress } from '../config'
import { getAbiFromSourcifyDecoder, getAbiFromSourcifyHttp } from './getAbiFromSourcify'

describe.only(getAbiFromSourcifyHttp.name, () => {
  // When reviewing locally, remove this `.skip`
  it.skip('{{ exploration: abi from sourcify http endpoint }}', async () => {
    // see https://ropsten.etherscan.io/address/0x0000A906D248Cc99FB8CB296C8Ad8C6Df05431c9#contracts
    const addr = parseAddress('0x0000A906D248Cc99FB8CB296C8Ad8C6Df05431c9')

    const abi = await getAbiFromSourcifyHttp('ropsten', addr)
    expect(abi).toEqual([
      {
        inputs: [],
        name: 'retreive',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'num',
            type: 'uint256',
          },
        ],
        name: 'store',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ])
  })

  it.skip('{{ exploration: abi from Decoder }}', async () => {
    const metadata = await getAbiFromSourcifyDecoder('ropsten', '0x0000A906D248Cc99FB8CB296C8Ad8C6Df05431c9')

    expect(metadata).toEqual({
      abi: [
        {
          inputs: [],
          name: 'retreive',
          outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [{ internalType: 'uint256', name: 'num', type: 'uint256' }],
          name: 'store',
          outputs: [],
          stateMutability: 'nonpayable',
          type: 'function',
        },
      ],
      devdoc: {
        details: 'Store & retreive value in a variable',
        methods: {
          'retreive()': { details: 'Return value ', returns: { _0: "value of 'number'" } },
          'store(uint256)': { details: 'Store value in variable', params: { num: 'value to store' } },
        },
        title: 'Storage',
      },
      userdoc: { methods: {} },
    })
  })
})
