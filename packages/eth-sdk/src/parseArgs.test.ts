import { expect } from 'earljs'

import { parseArgs } from './parseArgs'

describe('cli > parseArgs', () => {
  const cwd = '/root'

  it('throws on deprecated --out option', () => {
    expect(() => parseArgs({ argv: ['', '', ...'-p sdk -o @dethcrypto/eth-sdk-client'.split(' ')], cwd })).toThrow(
      expect.stringMatching('The "-o" argument is deprecated'),
    )
    expect(() => parseArgs({ argv: ['', '', ...'-p sdk --out my-outdir'.split(' ')], cwd })).toThrow(
      expect.stringMatching('The "--out" argument is deprecated'),
    )
  })

  it('parses all optional args', () => {
    const argv = ['', '', ...'-p sdk'.split(' ')]

    const args = parseArgs({ argv, cwd })

    expect(args).toEqual({ workingDirPath: '/root/sdk' })
  })

  it('correctly parses absolute paths', () => {
    const argv = ['', '', ...'-p /home/user1/sdk'.split(' ')]

    const args = parseArgs({ argv, cwd })

    expect(args).toEqual({ workingDirPath: '/home/user1/sdk' })
  })

  it('uses default args', () => {
    const argv = ['', '']

    const args = parseArgs({ argv, cwd })

    expect(args).toEqual({ workingDirPath: '/root/eth-sdk' })
  })
})
