import { join, relative } from 'path'
import { CodegenConfig } from 'typechain'

import { EthSdkCtx } from '../types'
import { generateTsClient } from './generateTsClient'
import { transpileClient } from './transpileClient'

export async function generateSdk(ctx: EthSdkCtx): Promise<void> {
  const {
    cliArgs: { workingDirPath },
    config: { contracts, outputPath, flags },
    fs,
  } = ctx

  await fs.ensureDir(outputPath)

  await copyStaticFiles(ctx)

  const abisRoot = join(workingDirPath, 'abis')
  const outputToAbiRelativePath = relative(outputPath, abisRoot).replace(/\\/g, '/')

  const randomTmpDir = await fs.tmpDir('eth-sdk')
  const shapedFlag: CodegenConfig = {
    discriminateTypes: flags.discriminateTypes,
    alwaysGenerateOverloads: flags.alwaysGenerateOverloads,
    environment: undefined,
  }
  if (flags.tsNocheck != null) {
    shapedFlag.tsNocheck = flags.tsNocheck
  }

  await generateTsClient(contracts, abisRoot, randomTmpDir, outputToAbiRelativePath, fs, shapedFlag)
  await transpileClient(randomTmpDir, outputPath, fs)
}

async function copyStaticFiles({ fs, config }: EthSdkCtx) {
  const staticDir = join(__dirname, '../../static')
  const dir = await fs.readDir(staticDir)

  await Promise.all(dir.map((file) => fs.copy(join(staticDir, file), join(config.outputPath, file))))
}
