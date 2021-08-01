#!/usr/bin/env node

import chalk from 'chalk'
import debug from 'debug'
import ora from 'ora'

import { gatherABIs } from './abi-management'
import { generateClient } from './client'
import { realFs } from './helpers/fs'
import { parseArgs } from './parseArgs'
import { loadSdkDefinition } from './sdk-def/loadSdkDef'
const d = debug('@eth-sdk/cli:cli')

export async function main() {
  const cwd = process.cwd()
  const args = parseArgs({ argv: process.argv, cwd })
  const fs = realFs

  d('Parsed args', args)

  const sdkDef = loadSdkDefinition(args, fs)

  console.log(`Loaded sdk definition from ${chalk.green(args.workingDirPath)}`)

  await spin(gatherABIs(sdkDef, args.workingDirPath, fs), 'Getting ABIs')
  await spin(generateClient(sdkDef, args.workingDirPath, args.outputRootPath), 'Generating client')
}

async function spin<T>(promise: Promise<T>, name: string): Promise<T> {
  ora.promise(promise, { text: name, spinner: 'dots3', color: 'magenta' })
  return await promise
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
