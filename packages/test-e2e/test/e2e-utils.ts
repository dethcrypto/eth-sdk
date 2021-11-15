import { execSync } from 'child_process'
import { rmSync } from 'fs-extra'
import { resolve } from 'path'

const THROWAWAY_MAINNET_ENDPOINT = 'https://mainnet.infura.io/v3/0993a4f4500c4fff88649d28b331898c'

export const env = {
  E2E_RPC: process.env.E2E_RPC || THROWAWAY_MAINNET_ENDPOINT,
  ROPSTEN_RPC: THROWAWAY_MAINNET_ENDPOINT.replace('mainnet', 'ropsten'),
}

export function rmrf(path: string) {
  try {
    rmSync(path, { recursive: true, force: true })
  } catch {}
}

export function generate(args: { path?: string; cwd?: string }) {
  execSync(`ts-node ${resolve(__dirname, '../../eth-sdk/src/cli.ts')}` + (args.path ? ` -p ${args.path}` : ''), {
    stdio: 'inherit',
    cwd: args.cwd,
  })
}
