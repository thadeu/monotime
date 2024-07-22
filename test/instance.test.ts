import { describe, it, expect } from 'vitest'
import { Time } from '@/index'

const UTC = new Time()
const GMT = new Time()

describe('Time', () => {
  it('tz should be different another tz', () => {
    GMT.config.tz = 'America/Sao_Paulo'
    let expectedTime = GMT.now

    UTC.config.tz = null
    expect(UTC.now).not.toEqual(expectedTime)
  })

  it('tz Sao_Paylo should be GMT-3', () => {
    GMT.config.tz = 'America/Sao_Paulo'
    let expectedTime = GMT.now

    UTC.config.tz = null
    expect(expectedTime).toEqual(UTC.zone.add(-3, 'hours').format('HH:mm:ss'))
  })
})
