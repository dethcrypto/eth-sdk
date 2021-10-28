import { AsyncOrSync } from 'ts-essentials'

import { Address, NestedAddresses, EthSdKContracts } from '.'

export async function traverseSdkDefinition(
  sdkDefinition: EthSdKContracts,
  traverse: (network: string, key: string[], address: Address) => AsyncOrSync<void>,
): Promise<void> {
  async function depthFirstTraverse(network: string, nestedAddresses: NestedAddresses, keys: string[]) {
    for (const [key, addressOrNested] of Object.entries(nestedAddresses)) {
      if (typeof addressOrNested === 'string') {
        await traverse(network, [...keys, key], addressOrNested)
      } else {
        await depthFirstTraverse(network, addressOrNested, [...keys, key])
      }
    }
  }

  for (const [network, def] of Object.entries(sdkDefinition)) {
    await depthFirstTraverse(network, def, [])
  }
}
