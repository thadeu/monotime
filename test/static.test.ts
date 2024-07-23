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

  it('Time.parse with tz options', () => {
    let time = '2024-07-23T15:50'
    Time.config.tz = 'America/Sao_Paulo'

    let date = Time.parse(time).toISOString()
    expect(date).toEqual('2024-07-23T18:50:00.000Z')

    let dateZone = Time.parse(time, { tz: null }).toISOString(true)
    expect(dateZone).toEqual('2024-07-23T18:50:00.000+00:00')
  })

  it('Time.parse with tz options', () => {
    let time = '23/07/2024 15:50'

    let date = Time.parse(time, { tz: 'America/Sao_Paulo' }).toISOString(true)
    expect(date).toEqual('2024-07-23T15:50:00.000-03:00')

    let date2 = Time.parse(date, { tz: null })
    expect(date2).toEqual('2024-07-23T18:50:00.000+00:00')
  })
})
