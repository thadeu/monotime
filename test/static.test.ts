import { describe, it, expect } from 'vitest'
import Time from '@/index'

describe('Time', () => {
  it('tz should be different another tz', () => {
    Time.config.tz = 'America/Sao_Paulo'
    let expectedTime = Time.now

    Time.config.tz = null
    expect(Time.now).not.toEqual(expectedTime)
  })

  it('tz Sao_Paylo should be Time-3', () => {
    Time.config.tz = 'America/Sao_Paulo'
    let expectedTime = Time.now

    Time.config.tz = null
    expect(expectedTime).toEqual(Time.zone.add(-3, 'hours').format('HH:mm:ss'))
  })
})
