import { timezone, Moment } from './timezone'

export class Time {
  config?: {
    tz?: string | null
  } = {}

  constructor(options = { tz: null }) {
    if (options.tz) {
      this.config.tz = options.tz
    }
  }

  private get adapter() {
    return function (date = new Date(), strict = false) {
      return timezone(date, strict, this?.config?.tz)
    }
  }

  unix(date) {
    if (!date) {
      return this.adapter(new Date()).unix() * 1000
    }

    return this.adapter(date).unix() * 1000
  }

  parse(date): Moment {
    try {
      if (!date) {
        return this.adapter(new Date())
      }

      return this.adapter(date, true)
    } catch (error) {
      return date
    }
  }

  /**
   * Use by Time.zone
   */
  get zone() {
    return this.adapter(new Date())
  }

  /**
   * Use by Time.isoString
   */
  get isoString() {
    return this.zone.toISOString(true)
  }

  /**
   * Use by Time.current
   */
  get current() {
    return this.zone.format('HH:mm:ss')
  }

  /**
   * Use by Time.now
   */
  get now() {
    return this.zone.format('HH:mm:ss')
  }

  get yesterday() {
    return this.zone.subtract(1, 'day')
  }

  get tomorrow() {
    return this.zone.add(1, 'day')
  }

  isSameOrAfter(startTime, text) {
    const [hour, minute, second] = text.split(':')

    const start = this.adapter(startTime || new Date())

    const end = this.adapter(new Date()).set({
      hour: hour || '0',
      minute: minute || '0',
      second: second || '0',
    })

    return start.isSameOrAfter(end, 'second')
  }

  isBefore(startTime, text) {
    const [hour, minute, second] = text.split(':')

    const start = this.adapter(startTime || new Date())

    const end = this.adapter(new Date()).set({
      hour: hour || '0',
      minute: minute || '0',
      second: second || '0',
    })

    return start.isBefore(end, 'second')
  }

  isAfter(endTime, startTime) {
    const start = this.adapter(startTime)
    const end = this.adapter(endTime)

    return end.isAfter(start, 'second')
  }
}

export default new Time()
