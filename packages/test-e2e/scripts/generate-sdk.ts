import { execSync } from 'child_process'
import { rmSync } from 'fs-extra'
import { resolve } from 'path'

rmSync(resolve(__dirname, '../test/sdk'), { recursive: true, force: true })
execSync(`ts-node ${resolve(__dirname, '../../eth-sdk/src/cli.ts')}`, { stdio: 'inherit' })
