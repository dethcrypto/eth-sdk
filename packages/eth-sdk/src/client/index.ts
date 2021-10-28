import { join, relative } from 'path'

import { Fs, realFs } from '../helpers/fs'
import { SdkDefinition } from '../sdk-def'
import { generateTsClient } from './generateTsClient'
import { transpileClient } from './transpileClient'

export async function generateClient(
  sdkDef: SdkDefinition,
  workingDirPath: string,
  outputPackageRoot: string,
  fs: Fs = realFs,
) {
  await fs.ensureDir(outputPackageRoot)

  const staticDir = join(__dirname, '../../static')
  const dir = await fs.readDir(staticDir)

  dir.forEach((file) => fs.copy(join(staticDir, file), join(outputPackageRoot, file)))

  const randomTmpDir = await fs.tmpDir('eth-sdk')
  const abisRoot = join(workingDirPath, 'abis')
  const outputToAbiRelativePath = relative(outputPackageRoot, abisRoot).replace(/\\/g, '/')
  await generateTsClient(sdkDef, abisRoot, randomTmpDir, outputToAbiRelativePath, fs)
  await transpileClient(randomTmpDir, outputPackageRoot, fs)
}
