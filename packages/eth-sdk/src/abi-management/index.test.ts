import { expect, mockFn } from 'earljs'

import { mockFilesystem } from '../../test/filesystemMock'
import { parseAddress } from '../config'
import { EthSdkCtx } from '../types'
import { gatherABIs } from './index'
import { GetAbi } from './types'

const fs = mockFilesystem({})

describe(gatherABIs.name, () => {
  it('writes abi to output path', async () => {
    const getAbiMock = mockFn((async () => abiFixtures) as GetAbi)
    await gatherABIs(ctxFixture, getAbiMock)

    expect(fs.test.isDirectory('outputPath/abis/kovan')).toEqual(true)
    expect(fs.test.readJson('outputPath/abis/kovan/dai.json')).toEqual(abiFixtures)
    expect(getAbiMock).toHaveBeenCalledWith(['kovan', contractsFixture.kovan.dai, etherscanKeyFixture])
  })
})

// #region fixtures
const abiFixtures = [
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

const contractsFixture = {
  kovan: {
    dai: parseAddress('0x6B175474E89094C44Da98b954EedeAC495271d0F'),
  },
}

const etherscanKeyFixture = 'CTX_CONFIG_ETHERSCAN_KEY'

const ctxFixture: EthSdkCtx = {
  cliArgs: { workingDirPath: '' },
  config: {
    outputPath: 'outputPath',
    contracts: contractsFixture,
    etherscanKey: etherscanKeyFixture,
  },
  fs,
}
// #endregion fixtures
