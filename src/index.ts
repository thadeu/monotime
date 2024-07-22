import { timezone, Moment } from './timezone'

export class Time {
  static unix(date) {
    if (!date) {
      return timezone(new Date()).unix() * 1000
    }

    return timezone(date).unix() * 1000
  }

  static parse(date): Moment {
    try {
      if (!date) {
        return timezone(new Date())
      }

      return timezone(date, true)
    } catch (error) {
      return date
    }
  }

  /**
   * Use by Time.zone
   */
  static get zone() {
    return timezone(new Date())
  }

  /**
   * Use by Time.isoString
   */
  static get isoString() {
    return this.zone.toISOString(true)
  }

  /**
   * Use by Time.current
   */
  static get current() {
    return this.zone.format('HH:mm:ss')
  }

  /**
   * Use by Time.now
   */
  static get now() {
    return this.zone.format('HH:mm:ss')
  }

  static get yesterday() {
    return this.zone.subtract(1, 'day')
  }

  static get tomorrow() {
    return this.zone.add(1, 'day')
  }

  static isSameOrAfter(startTime, text) {
    const [hour, minute, second] = text.split(':')

    const start = timezone(startTime || new Date())

    const end = timezone(new Date()).set({
      hour: hour || '0',
      minute: minute || '0',
      second: second || '0',
    })

    return start.isSameOrAfter(end, 'second')
  }

  static isBefore(startTime, text) {
    const [hour, minute, second] = text.split(':')

    const start = timezone(startTime || new Date())

    const end = timezone(new Date()).set({
      hour: hour || '0',
      minute: minute || '0',
      second: second || '0',
    })

    return start.isBefore(end, 'second')
  }

  static isAfter(endTime, startTime) {
    const start = timezone(startTime)
    const end = timezone(endTime)

    return end.isAfter(start, 'second')
  }
}

export default Time
