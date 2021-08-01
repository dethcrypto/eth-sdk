// ensure NODE_ENV
process.env.NODE_ENV = 'test'

// if tsconfig.test.json exists in cwd prefer it
const { existsSync } = require('fs')
const { join } = require('path')
const testTsconfigPath = join(process.cwd(), 'tsconfig.test.json')
if (existsSync(testTsconfigPath)) {
  process.env.TS_NODE_PROJECT = testTsconfigPath
}

// exit test runner on unhandled rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection during test execution:', promise, 'reason:', reason)
  process.exit(1)
})

module.exports = {
  require: ['ts-node/register/transpile-only', 'earljs/mocha'],
  extension: ['ts'],
  watchExtensions: ['ts'],
  spec: ['test/**/*.test.ts'],
}
