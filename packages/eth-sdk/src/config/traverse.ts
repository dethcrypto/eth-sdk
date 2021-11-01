import { AsyncOrSync } from 'ts-essentials'

import type { NetworkSymbol } from '../abi-management/networks'
import { unsafeEntries } from '../utils/unsafeKeys'
import type { Address, EthSdKContracts, NestedAddresses } from './types'

export async function traverseContractsMap(
  contracts: EthSdKContracts,
  traverse: (network: NetworkSymbol, path: string[], address: Address) => AsyncOrSync<void>,
): Promise<void> {
  async function depthFirstTraverse(network: NetworkSymbol, nestedAddresses: NestedAddresses, keys: string[]) {
    for (const [key, addressOrNested] of Object.entries(nestedAddresses)) {
      if (typeof addressOrNested === 'string') {
        await traverse(network, [...keys, key], addressOrNested)
      } else {
        await depthFirstTraverse(network, addressOrNested, [...keys, key])
      }
    }
  }

  for (const [network, def] of unsafeEntries(contracts)) {
    await depthFirstTraverse(network, def!, [])
  }
}
