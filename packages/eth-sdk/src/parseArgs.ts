import { Command } from 'commander'
import { isAbsolute, join } from 'path'

const DEFAULT_CONFIG_PATH = './eth-sdk'

export interface EthSdkCliArgs {
  workingDirPath: string
}

export function parseArgs({ argv, cwd }: { argv: string[]; cwd: string }): EthSdkCliArgs {
  panicOnDeprecatedArgs(argv)

  const program = new Command()
  program.option('-p, --path <path>', 'Config root', DEFAULT_CONFIG_PATH)
  program.version(require('../package.json').version)
  program.parse(argv)

  const rawOpts = program.opts()

  return {
    workingDirPath: joinPaths({ cwd, path: rawOpts.path }),
  }
}

function joinPaths({ path, cwd }: { path: string; cwd: string }) {
  const absolutePath = isAbsolute(path) ? path : join(cwd, path)
  return absolutePath.replace(/\\/g, '/')
}

function panicOnDeprecatedArgs(argv: string[]) {
  const deprecatedArgs = ['--out', '-o']

  for (const cliArg of deprecatedArgs) {
    if (argv.includes(cliArg)) {
      throw new Error(
        `The "${cliArg}" argument is deprecated.\n` +
          `Please set "outputPath" property in your config file instead.\n` +
          'Learn more about migration to eth-sdk 0.2 at\n' +
          'https://github.com/dethcrypto/eth-sdk/releases\n',
      )
    }
  }
}
