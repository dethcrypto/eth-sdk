import { expect, mockFn } from 'earljs'

import { parseAddress } from '../../config'
import { FetchJson } from '../../peripherals/fetchJson'
import { Abi } from '../../types'
import { getAbiFromSourcify, SourcifyFile } from './getAbiFromSourcify'

describe(getAbiFromSourcify.name, () => {
  const userNetworkIds = {
    'dethcrypto-test': 1337,
  }

  it('extracts abi from fetched files', async () => {
    // see https://ropsten.etherscan.io/address/0x0000A906D248Cc99FB8CB296C8Ad8C6Df05431c9#contracts
    const addr = parseAddress('0x0000A906D248Cc99FB8CB296C8Ad8C6Df05431c9')

    const fetchAbi = mockFn<FetchJson<SourcifyFile[]>>(async (url) => FILES_FROM_SOURCIFY)
    const abi = await getAbiFromSourcify('ropsten', addr, userNetworkIds, fetchAbi)

    expect(fetchAbi).toHaveBeenCalledWith([`https://sourcify.dev/server/files/3/${addr}`])
    expect(abi).toEqual(CONTRACT_ABI)
  })
})

const CONTRACT_ABI: Abi = [
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
]

const FILES_FROM_SOURCIFY = [{ name: 'metadata.json', content: JSON.stringify({ output: { abi: CONTRACT_ABI } }) }]
