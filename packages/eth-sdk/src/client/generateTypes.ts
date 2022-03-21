import { join } from 'path'
import { glob, runTypeChain } from 'typechain'

export async function generateTypes(abisRoot: string, outputPath: string) {
  const cwd = process.cwd()
  const files = glob(cwd, [join(abisRoot, '/**/*.json')])

  await runTypeChain({
    cwd,
    allFiles: files,
    filesToProcess: files,
    target: 'ethers-v5',
    outDir: outputPath,
    inputDir: abisRoot,
  })
}
