import { Interface } from '@ethersproject/abi'
import { BigNumber } from '@ethersproject/bignumber'

import { Address, parseAddress } from '../config'
import { Abi, JsonFragment } from '../types'
import { RpcProvider } from './getRpcProvider'

export async function detectProxy(address: Address, abi: Abi, provider: RpcProvider): Promise<DetectProxyResult> {
  const stored = await lookForImplementationAddr(address, abi, provider)

  const asNumber = BigNumber.from(stored || 0)
  if (!asNumber.isZero()) {
    const implAddress = asNumber.toHexString()
    const code = await provider.getCode(implAddress)
    const isContract = !BigNumber.from(code).isZero()

    if (isContract) {
      return { implAddress: parseAddress(implAddress), isProxy: true }
    }
  }

  return { isProxy: false }
}

export type DetectProxyResult = { implAddress: Address; isProxy: true } | { isProxy: false }

async function lookForImplementationAddr(address: Address, abi: Abi, provider: RpcProvider): Promise<BigNumber | null> {
  const call = async (name: string) =>
    BigNumber.from(
      await provider.call({
        to: address,
        data: new Interface(abi).encodeFunctionData(name, []),
      }),
    )

  // We check storage slot specified by EIP-1967 to hold implementation address.
  // see https://eips.ethereum.org/EIPS/eip-1967
  {
    const stored = BigNumber.from(await provider.getStorageAt(address, EIP1967_IMPLEMENTATION_STORAGE_SLOT))
    if (!stored.isZero()) return stored
  }
  // We check storage slot specified by openzeppelin to hold implementation address.
  // see https://github.com/OpenZeppelin/openzeppelin-labs/blob/master/initializer_with_sol_editing/contracts/UpgradeabilityProxy.sol#L24
  {
    const stored = BigNumber.from(await provider.getStorageAt(address, ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT))
    if (!stored.isZero()) return stored
  }

  // If there is an `.implementation` getter, we try to call it.
  const implementationGetter = abi.find((fragment) => fragment.name === 'implementation')
  if (implementationGetter && isPossibleImplementationGetter(implementationGetter)) {
    return call('implementation')
  }

  // Otherwise, we try shortest getter ending with "Implementation"
  const possibleImplementationGetters = abi.filter(isPossibleImplementationGetter)
  if (possibleImplementationGetters.length) {
    const [frag] = possibleImplementationGetters.sort((a, b) => a.name.length - b.name.length)
    return call(frag.name)
  }

  return null
}

/** @internal */
export const EIP1967_IMPLEMENTATION_STORAGE_SLOT = '0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc'
export const ZEPPELIN_IMPLEMENTATION_STORAGE_SLOT = '0x7050c9e0f4ca769c69bd3a8ef740bc37934f8e2c036e5a723fd8ee048ed3f8c3'

const isPossibleImplementationGetter = (frag: JsonFragment): frag is JsonFragment & { name: string } => {
  if (
    frag.type === 'function' &&
    frag.name &&
    frag.name.match(/[iI]mplementation$/) &&
    (frag.stateMutability === 'view' || frag.stateMutability === 'pure')
  ) {
    const output = frag.outputs?.[0]
    return output?.type === 'address'
  }
  return false
}
