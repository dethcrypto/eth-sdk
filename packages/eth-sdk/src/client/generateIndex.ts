import debug from 'debug'
import { startCase } from 'lodash'
import { join } from 'path'
import { normalizeName } from 'typechain'

import { NetworkSymbol } from '../abi-management/networks'
import { traverseContractsMap } from '../config/traverse'
import { EthSdkContracts, NestedAddresses } from '../config/types'
import { Fs, realFs } from '../peripherals/fs'
import { unsafeKeys } from '../utils/unsafeKeys'

const d = debug('@dethcrypto/eth-sdk:client')

export async function generateIndex(
  contracts: EthSdkContracts,
  outputPath: string,
  outputToAbiRelativePath: string,
  fs: Fs = realFs,
) {
  d('Generating index file')
  const indexPath = join(outputPath, './index.ts')

  const index = `
import { Signer, Contract } from 'ethers'

import * as types from './types'

${await getAbiImports(contracts, outputToAbiRelativePath)}

export function getContract(address: string, abi: object, defaultSigner: Signer) {
  return new Contract(address, abi, defaultSigner)
}

  ${unsafeKeys(contracts)
    .map((network) => generateNetworkSdk(network, contracts)) // fix path to abi here
    .join('\n\n')}
  `

  await fs.write(indexPath, index)
}

function importedAbiIdentifier(keys: string[]): string {
  const name = normalizeName(keys[keys.length - 1]) + 'Abi'
  return name[0].toLowerCase() + name.slice(1)
}

async function getAbiImports(sdkDef: EthSdkContracts, outputToAbiRelativePath: string) {
  const paths: string[][] = []
  await traverseContractsMap(sdkDef, (network, keys) => void paths.push([network, ...keys]))

  return paths
    .map((path) => {
      const importPath = '../' + outputToAbiRelativePath + '/' + path.join('/') + '.json'

      return `import ${importedAbiIdentifier(path)} from '${importPath}'`
    })
    .join('\n')
}

function generateNetworkSdk(networkSymbol: NetworkSymbol, sdkDef: EthSdkContracts): string {
  const nestedAddresses = sdkDef[networkSymbol]!
  const network = startCase(networkSymbol).replace(' ', '')

  return `
export type ${network}Sdk = ReturnType<typeof get${network}Sdk>
export function get${network}Sdk(defaultSigner: Signer) {
  return ${generateBody(nestedAddresses, [networkSymbol], true)}
}
`
}

function generateBody(nestedAddresses: NestedAddresses, keys: string[], topLevel: boolean = false): string {
  const body = ['{']

  for (const [key, addressOrNested] of Object.entries(nestedAddresses)) {
    if (typeof addressOrNested === 'string') {
      const address = addressOrNested
      const abi = importedAbiIdentifier([key])

      body.push(`"${key}": getContract('${address}', ${abi}, defaultSigner) as types.${normalizeName(key)},`)
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
