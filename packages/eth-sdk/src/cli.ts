#!/usr/bin/env node

import chalk from 'chalk'
import debug from 'debug'
import ora from 'ora'
import { relative } from 'path'

import { gatherABIs } from './abi-management'
import { generateSdk } from './client'
import { findConfigFile, readConfig } from './config'
import { parseArgs } from './parseArgs'
import { realFs } from './peripherals/fs'
import { EthSdkCtx } from './types'

const d = debug('@dethcrypto/eth-sdk:cli')

export async function main() {
  const cwd = process.cwd()
  const cliArgs = parseArgs({ argv: process.argv, cwd })
  const fs = realFs

  d('Parsed args', cliArgs)

  const config = await readConfig(findConfigFile(cliArgs, fs))

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
