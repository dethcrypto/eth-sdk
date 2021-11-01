#!/usr/bin/env node

import chalk from 'chalk'
import debug from 'debug'
import ora from 'ora'
import { relative } from 'path'

import { gatherABIs } from './abi-management'
import { generateSdk } from './client'
import { findConfigFile, readConfig } from './config'
import { parseArgs } from './parseArgs'
import { formatError } from './peripherals/formatError'
import { realFs } from './peripherals/fs'
import { EthSdkCtx } from './types'

const d = debug('@dethcrypto/eth-sdk:cli')

export async function main() {
  const cwd = process.cwd()

  let ctx: EthSdkCtx
  try {
    const cliArgs = parseArgs({ argv: process.argv, cwd })

    const fs = realFs

    d('Parsed args', cliArgs)

    const configPath = findConfigFile(cliArgs, fs)
    const config = await readConfig(configPath, require)

    ctx = { cliArgs, config, fs }
  } catch (error) {
    console.error(formatError(error))
    process.exit(1)
  }

  console.log(`Loaded sdk definition from ${chalk.green(ctx.cliArgs.workingDirPath)}`)

  await spin('Getting ABIs', gatherABIs(ctx))
  await spin('Generating client', generateSdk(ctx))
  console.log(`SDK generated to: ${relative(cwd, ctx.config.outputPath)}`)
}

async function spin<T>(text: string, promise: Promise<T>): Promise<T> {
  ora.promise(promise, { text, spinner: 'dots3', color: 'magenta' })
  return await promise
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
