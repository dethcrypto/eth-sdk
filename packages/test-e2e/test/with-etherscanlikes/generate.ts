import { resolve } from 'path'

import { generate, rmrf } from '../e2e-utils'

rmrf(resolve(__dirname, './outDir'))
rmrf(resolve(__dirname, './abis'))
generate({ path: '.', cwd: __dirname })
