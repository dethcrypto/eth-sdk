import { expect } from 'earljs'
import { z } from 'zod'

import { SdkDefinitionSchema } from '../../src/config/types'

describe('sdk-def/types', () => {
  it('parses valid schemas', () => {
    const schema: unknown = {
      mainnet: {
        dai: '0x01',
      },
    }

    SdkDefinitionSchema.parse(schema)
  })

  it('throws on invalid schemas', () => {
    const schema: unknown = {
      1: true,
    }

    expect(() => SdkDefinitionSchema.parse(schema)).toThrow(z.ZodError)
  })
})
