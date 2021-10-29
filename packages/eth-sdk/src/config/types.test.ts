import { expect } from 'earljs'
import { constants } from 'ethers'
import { z } from 'zod'

import { Address, ethSdkConfigSchema, parseAddress } from './types'

describe('config types', () => {
  describe(parseAddress.name, () => {
    it('throws when argument is not an address', () => {
      expect(() => parseAddress('T-Rex')).toThrow(expect.stringMatching('"T-Rex" is not an address.'))
    })

    it('parses an address', () => {
      const actual: Address = parseAddress(constants.AddressZero)
      expect(actual).toEqual(constants.AddressZero as Address)
    })
  })

  describe('EthSdkConfig', () => {
    it('parses valid schemas', () => {
      const schema: unknown = {
        contracts: {
          mainnet: {
            dai: constants.AddressZero,
          },
        },
      }

      ethSdkConfigSchema.parse(schema)
    })

    it('throws on invalid schemas', () => {
      const schema: unknown = {
        1: true,
      }

      expect(() => ethSdkConfigSchema.parse(schema)).toThrow(z.ZodError)
    })
  })
})
