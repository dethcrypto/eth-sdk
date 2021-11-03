import { mockFilesystem } from '../../test/filesystemMock'
import { parseAddress } from '../config'
import { EthSdkCtx } from '../types'
import { gatherABIs } from './index'

const ctx: EthSdkCtx = {
  cliArgs: { workingDirPath: '' },
  config: {
    outputPath: './outputPath',
    contracts: {
      kovan: {
        dai: parseAddress('0x6B175474E89094C44Da98b954EedeAC495271d0F'),
      },
    },
  },
  fs: mockFilesystem({}),
}

describe(gatherABIs.name, () => {
  it('writes abi to output path', async () => {
    await gatherABIs(ctx, async (network, address) => fixtures.abi)
    console.log()
  })
})

const fixtures = {
  abi: {
    constant: true,
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'bytes32' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
}
