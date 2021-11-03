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
}


describe(gatherABIs.name, () => {
  it('writes ')

})
