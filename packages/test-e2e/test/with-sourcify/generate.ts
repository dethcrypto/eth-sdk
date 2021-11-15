import { resolve } from 'path'

import { generate, rmrf } from '../e2e-utils'

// Sourcify is not ratelimited, so we can remove abis freely every time
rmrf(resolve(__dirname, 'abis'))
rmrf(resolve(__dirname, 'sdk'))
generate({ path: '.', cwd: __dirname })
