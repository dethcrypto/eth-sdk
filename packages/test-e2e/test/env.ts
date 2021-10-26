const THROWAWAY_MAINNET_ENDPOINT = 'https://mainnet.infura.io/v3/0993a4f4500c4fff88649d28b331898c'

export const env = {
  E2E_RPC: process.env.E2E_RPC || THROWAWAY_MAINNET_ENDPOINT,
}
