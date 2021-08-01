import { join } from 'path'
import { glob, runTypeChain } from 'typechain'

export async function generateTypes(abisGlob: string, outputPath: string) {
  const cwd = process.cwd()
  const files = glob(cwd, [join(abisGlob)])

  await runTypeChain({
    cwd,
    allFiles: files,
    filesToProcess: files,
    target: 'ethers-v5',
    outDir: outputPath,
  })
}
