import debug from 'debug'
import { resolve } from 'path'
import * as tsc from 'typescript'

import { Fs } from '../peripherals/fs'
const d = debug('@dethcrypto/eth-sdk-cli:client')

export async function transpileClient(clientPath: string, outputPath: string, fs: Fs): Promise<void> {
  d(`Transpiling client from ${clientPath} to ${outputPath}`)

  const tsFiles = await fs.glob('**/*.ts', { cwd: clientPath, absolute: true })

  await Promise.all(
    outputs.map(async ({ directory, module }) => {
      const outDir = resolve(outputPath, directory)

      const target = tsc.ScriptTarget.ES2018
      const options: tsc.CompilerOptions = {
        declaration: true,
        target,
        outDir,
        module,
        rootDir: clientPath,
        resolveJsonModule: true,
        esModuleInterop: true,
        moduleResolution: tsc.ModuleResolutionKind.NodeJs,
      }
      const host = tsc.createCompilerHost(options)
      host.getCurrentDirectory = () => clientPath

      const program = tsc.createProgram(tsFiles, options, host)
      let diagnostics = tsc.getPreEmitDiagnostics(program)

      // We expect errors of code 2307 — the user does not have to have all
      // dependencies installed during codegen. It will crash in runtime,
      // https://www.typescriptlang.org/docs/handbook/module-resolution.html
      diagnostics = diagnostics.filter((d) => d.code !== 2307)
      if (diagnostics.length) {
        throw new Error(`TypeScript compilation failed.\n${diagnostics.map((d) => d.messageText).join('\n')}`)
      }

      program.emit()
    }),
  )
}

const outputs = [
  { module: tsc.ModuleKind.CommonJS, directory: 'cjs' },
  { module: tsc.ModuleKind.ESNext, directory: 'esm' },
]
