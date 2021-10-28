import debug from 'debug'
import { startCase } from 'lodash'
import { join } from 'path'
import { normalizeName } from 'typechain'

import { Fs, realFs } from '../helpers/fs'
import { NestedAddresses, SdkDefinition } from '../sdk-def/types'
const d = debug('@dethcrypto/eth-sdk:client')

export async function generateIndex(
  def: SdkDefinition,
  outputPath: string,
  outputToAbiRelativePath: string,
  fs: Fs = realFs,
) {
  d('Generating index file')
  const indexPath = join(outputPath, './index.ts')

  const index = `
import { readFileSync } from 'fs'
import { join } from 'path'
import { Signer, Contract } from 'ethers'

import * as types from './types'

export function getContract<T>(address: string, abiPath: string, defaultSigner: Signer): T {
  const abi = JSON.parse(readFileSync(join(__dirname, '${outputToAbiRelativePath}', abiPath + '.json'), 'utf-8'))
  return new Contract(address, abi, defaultSigner) as any
}

  ${Object.keys(def)
    .map((network) => generateNetworkSdk(network, def)) // fix path to abi here
    .join('\n\n')}
  `
  fs.write(indexPath, index)
}

function generateNetworkSdk(rawNetwork: string, sdkDef: SdkDefinition): string {
  const nestedAddresses = sdkDef[rawNetwork]
  const network = startCase(rawNetwork).replace(' ', '')

  return `
export type ${network}Sdk = ReturnType<typeof get${network}Sdk>
export function get${network}Sdk(defaultSigner: Signer) {
  return ${generateBody(nestedAddresses, [rawNetwork], true)}
}
`
}

function generateBody(nestedAddresses: NestedAddresses, keys: string[], topLevel: boolean = false): string {
  const body = ['{']

  for (const [key, addressOrNested] of Object.entries(nestedAddresses)) {
    if (typeof addressOrNested === 'string') {
      const address = addressOrNested
      const fullPath = [...keys, key].join('/')
      body.push(`"${key}": getContract<types.${normalizeName(key)}>('${address}', '${fullPath}', defaultSigner),`)
    } else {
      body.push(`"${key}":`)
      body.push(generateBody(addressOrNested, [...keys, key]))
    }
  }
  body.push(`}`)
  if (!topLevel) {
    body.push(`,`)
  }
  return body.join('\n')
}
