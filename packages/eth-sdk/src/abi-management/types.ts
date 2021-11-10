import { Address } from '../config'
import { Abi } from '../types'
import type { UserEtherscanURLs } from './etherscan/urls'
import type { NetworkSymbol } from './networks'

export type GetAbi = (
  network: NetworkSymbol,
  address: Address,
  apiKey: string,
  userNetworks: UserEtherscanURLs,
) => Promise<Abi>
