import { resolve } from 'path'

import { generate, rmrf } from '../e2e-utils'

rmrf(resolve(__dirname, './outDir'))
rmrf(resolve(__dirname, './eth-sdk/abis'))
generate({ path: '.', cwd: __dirname })
