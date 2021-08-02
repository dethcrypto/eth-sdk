import { Command } from 'commander'
import { isAbsolute, join } from 'path'

export const DEFAULT_CONFIG_PATH = './eth-sdk'
export const DEFAULT_OUTPUT_PACKAGE_PATH = './node_modules/.eth-dx/sdk-client'

export function parseArgs({ argv, cwd }: { argv: string[]; cwd: string }): Args {
  const program = new Command()
  program.option('-p, --path <path>', 'Config root', DEFAULT_CONFIG_PATH)
  program.option('-o, --out <path>', 'Output (Client package) path', DEFAULT_OUTPUT_PACKAGE_PATH)
  program.version(require('../package.json').version)

  program.parse(argv)

  const rawOpts = program.opts()

  return {
    workingDirPath: joinPaths({ cwd, path: rawOpts.path }),
    outputRootPath: joinPaths({ cwd, path: rawOpts.out }),
  }
}

export function joinPaths({ path, cwd }: { path: string; cwd: string }) {
  if (isAbsolute(path)) {
    return path
  } else {
    return join(cwd, path)
  }
}

export interface Args {
  workingDirPath: string
  outputRootPath: string
}
