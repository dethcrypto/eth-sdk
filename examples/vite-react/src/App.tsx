import './App.css'

import { getMainnetSdk } from '@dethcrypto/eth-sdk-client'
import { ethers } from 'ethers'
import { Suspense, useState } from 'react'
import { useQuery } from 'react-query'

export function App() {
  const [address, setAddress] = useState(defaultSigner.address)
  const balance = useDaiBalance(address)

  return (
    <main className="App">
      <label className="column">
        <div className="text-small">Address</div>
        <input
          onChange={(event) => {
            const { value } = event.target
            if (value.length === 42) setAddress(value)
          }}
        />
      </label>
      <div>
        <div id="balance-label" className="text-small">
          DAI Balance {balance.isLoading && <span className="text-italic text-small text-gray">Loading...</span>}
        </div>
        <output aria-labelledby="balance-label">{balance.data}</output>
      </div>
      <hr />
      <ul className="holders-list">
        {holders.map((holder, i) => (
          <Suspense fallback={null} key={i}>
            <li className="holders-list-item">
              <div className="text-small">{holder.address}</div>
              <div className="text-small text-bold text-gray">{holder.tag}</div>
              <Balance address={holder.address} />
            </li>
          </Suspense>
        ))}
      </ul>
    </main>
  )
}

const mainnetProvider = ethers.getDefaultProvider('mainnet')
const defaultSigner = ethers.Wallet.createRandom().connect(mainnetProvider)
const { dai } = getMainnetSdk(defaultSigner)

function useDaiBalance(address: string, options: { suspense?: boolean } = {}) {
  return useQuery(
    `balanceOf-${address}`,
    async () => {
      const balance = await dai.balanceOf(address)

      return ethers.utils.formatUnits(balance, 18)
    },
    options,
  )
}

function Balance({ address }: { address: string }) {
  const balance = useDaiBalance(address, { suspense: true })

  return <span className="text-mono">{balance.data}</span>
}

const holders = [
  {
    tag: 'Curve.fi: DAI/USDC/USDT Pool',
    address: '0xbebc44782c7db0a1a60cb6fe97d0b483032ff1c7',
  },
  {
    tag: 'Compound: cDAI Token',
    address: '0x5d3a536e4d6dbd6114cc1ead35777bab948e3643',
  },
  {
    tag: 'Aave: aDAI Token V2',
    address: '0x028171bca77440897b824ca71d1c56cac55b68a3',
  },
]
