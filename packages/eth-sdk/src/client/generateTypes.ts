import { join } from 'path'
import { CodegenConfig, glob, runTypeChain } from 'typechain'

export async function generateTypes(abisRoot: string, outputPath: string, typechainFlags: CodegenConfig) {
  const cwd = process.cwd()
  const files = glob(cwd, [join(abisRoot, '/**/*.json')])

  await runTypeChain({
    cwd,
    allFiles: files,
    filesToProcess: files,
    target: 'ethers-v5',
    outDir: outputPath,
    inputDir: abisRoot,
    typechainFlags,
  })
}
