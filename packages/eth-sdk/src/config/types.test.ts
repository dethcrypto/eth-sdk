import { expect } from 'earljs'
import { constants } from 'ethers'

import { ethSdKContractsSchema } from '.'
import { Address, parseAddress, parseEthSdkConfig } from './types'

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

  describe('ethSdKContractsSchema', () => {
    it('parses valid schemas', () => {
      ethSdKContractsSchema.parse({
        mainnet: {
          a: constants.AddressZero,
          b: {
            c: constants.AddressZero,
            d: {
              e: constants.AddressZero,
            },
          },
        },
      })
    })
  })

  describe(parseEthSdkConfig.name, () => {
    it('parses valid schemas', () => {
      const schema = {
        contracts: {
          mainnet: {
            dai: constants.AddressZero,
          },
        },
      }

      expect(parseEthSdkConfig(schema)).toEqual({
        contracts: schema.contracts as any,
        outputPath: expect.stringMatching(''),
      })
    })

    it('throws on invalid schemas', () => {
      const schema: unknown = {
        1: true,
      }

      expect(() => parseEthSdkConfig(schema)).toThrow(expect.stringMatching(`Unrecognized key(s) in object: '1'`))
    })
  })
})
