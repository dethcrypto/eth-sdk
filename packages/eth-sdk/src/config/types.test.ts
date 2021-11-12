import { expect } from 'earljs'
import { constants } from 'ethers'

import { EthSdkConfigInput, ethSdKContractsSchema } from '.'
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
    it('throws when address is invalid', () => {
      const invalidValues = ['T-Rex0000000000000000000000000000000000000', '0x0', '0x' + '0'.repeat(50)]

      for (const invalid of invalidValues) {
        const input: EthSdkConfigInput = {
          contracts: {
            optimismKovan: {
              valid: '0x0000000000000000000000000000000000000000',
              // @ts-expect-error
              invalid,
            },
          },
        }

        expect(() => parseEthSdkConfig(input)).toThrow(expect.stringMatching(INVALID_ADDRESS_EXPECTED_ERROR_MESSAGE))
      }
    })

    it('parses valid schemas', () => {
      const input = {
        contracts: {
          mainnet: {
            dai: constants.AddressZero,
          },
        },
        rpc: {
          mainnet: 'https://cloudflare-eth.com',
        },
      }

      expect(parseEthSdkConfig(input)).toEqual({
        contracts: input.contracts as any,
        outputPath: expect.stringMatching(''),
        etherscanKey: expect.stringMatching(''),
        etherscanURLs: {},
        rpc: {
          mainnet: 'https://cloudflare-eth.com',
        },
        abiSource: 'etherscan',
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

const INVALID_ADDRESS_EXPECTED_ERROR_MESSAGE = new RegExp(`\
Failed to parse eth-sdk config:
(invalid_string|too_small|too_big) at "contracts.optimismKovan.invalid": An address must be 42 characters hexadecimal number string.`)
