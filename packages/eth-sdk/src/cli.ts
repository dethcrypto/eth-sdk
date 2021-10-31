#!/usr/bin/env node

import chalk from 'chalk'
import debug from 'debug'
import ora from 'ora'
import { relative } from 'path'

import { gatherABIs } from './abi-management'
import { generateSdk } from './client'
import { findConfigFile, readConfig } from './config'
import { EthSdkCliArgs, parseArgs } from './parseArgs'
import { realFs } from './peripherals/fs'
import { EthSdkCtx } from './types'
import { makeError } from './utils/makeError'

const d = debug('@dethcrypto/eth-sdk:cli')

export async function main() {
  const cwd = process.cwd()

  let cliArgs: EthSdkCliArgs
  try {
    cliArgs = parseArgs({ argv: process.argv, cwd })
  } catch (error: unknown) {
    console.error(makeError(error).message)
    process.exit(1)
  }

  const fs = realFs

  d('Parsed args', cliArgs)

  const configPath = findConfigFile(cliArgs, fs)
  const config = await readConfig(configPath, require)

  console.log(`Loaded sdk definition from ${chalk.green(cliArgs.workingDirPath)}`)

  const context: EthSdkCtx = {
    cliArgs,
    config,
    fs,
  }

  await spin('Getting ABIs', gatherABIs(context))
  await spin('Generating client', generateSdk(context))
  console.log(`SDK generated to: ${relative(cwd, config.outputPath)}`)
}

async function spin<T>(text: string, promise: Promise<T>): Promise<T> {
  ora.promise(promise, { text, spinner: 'dots3', color: 'magenta' })
  return await promise
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
