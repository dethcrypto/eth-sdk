import { resolve } from 'path'

import { generate, rmrf } from '../e2e-utils'

rmrf(resolve(__dirname, './sdk'))
rmrf(resolve(__dirname, './eth-sdk/abis'))
generate({ cwd: __dirname })
