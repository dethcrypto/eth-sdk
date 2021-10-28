import debug from 'debug'
import * as glob from 'glob'
import { basename, join } from 'path'
import * as tsc from 'typescript'

import { Fs } from '../helpers/fs'
const d = debug('@dethcrypto/eth-sdk-cli:client')

export function transpileClient(clientPath: string, outputPath: string, fs: Fs): void {
  d(`Transpiling client from ${clientPath} to ${outputPath}`)
  const target = tsc.ScriptTarget.ES2018
  const options: tsc.CompilerOptions = {
    declaration: true,
    target,
    outDir: outputPath,
    module: tsc.ModuleKind.CommonJS,
    rootDir: clientPath,
  }
  const host = tsc.createCompilerHost(options)
  host.getCurrentDirectory = () => clientPath

  const tsFiles = glob.sync('**/*.ts', { cwd: clientPath, absolute: true })

  const program = tsc.createProgram(tsFiles, options, host)
  program.emit()

  // we need to manually copy d.ts files b/c tsc won't do it
  // https://stackoverflow.com/questions/56018167/typescript-does-not-copy-d-ts-files-to-build
  const tsdFiles = glob.sync('types/**/*.d.ts', { cwd: clientPath, absolute: true })
  tsdFiles.map((tsdPath) => {
    const outputFilePath = join(outputPath, 'types', basename(tsdPath))
    d(`Copying ${tsdPath} to ${outputFilePath}`)
    fs.copy(tsdPath, outputFilePath)
  })
}
