import { resolve } from 'path'

import { generate, rmrf } from '../e2e-utils'

rmrf(resolve(__dirname, './sdk'))
generate({ cwd: __dirname })
