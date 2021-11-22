import * as childProcess from 'child_process'
import * as dotenv from 'dotenv'
import { resolve } from 'path'
import * as waitOn from 'wait-on'

dotenv.config()

// @ts-ignore
import _spawn = require('cross-spawn-with-kill')

const spawn = _spawn as typeof import('child_process').spawn

async function main() {
  let port = process.env.HH_NODE_PORT
  if (!port) {
    // eslint-disable-next-line no-eval
    port = String(await eval("import('get-port')").then((m: typeof import('get-port')) => m.default()))
    process.env.HH_NODE_PORT = port
  }

  console.log(`Starting hardhat node on port ${port}`)

  const node = spawn('hardhat', ['node', '--port', port], { stdio: 'ignore' })
  node.on('error', (err) => {
    console.error(err)
    process.exit(1)
  })
  await waitOn({
    resources: [`http://localhost:${port}/`],
  })

  childProcess.execSync('yarn eth-sdk', { stdio: 'inherit' })

  console.log('Generated SDK with eth-sdk')

  console.log('Running ./scripts/exploit.ts')
  childProcess.execSync('hardhat run ./scripts/exploit.ts', { cwd: resolve(__dirname, '..'), stdio: 'inherit' })

  node.kill()
}

void main()
