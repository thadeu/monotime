import moment, { Moment } from 'moment-timezone'

const MOMENT_FORMATS = [
  'DD/MM/YYYY',
  'YYYY/MM/DD',
  'YYYY-MM-DD',
  'DD/MM/YYYY HH:mm',
  'YYYY-MM-DD HH:mm',
  moment.ISO_8601,
  moment.HTML5_FMT.DATETIME_LOCAL,
  moment.HTML5_FMT.DATETIME_LOCAL_SECONDS,
  moment.HTML5_FMT.DATETIME_LOCAL_MS,
]

function timezone(
  date: null | Date | string | number = null,
  strict = false,
  tz: any = null,
): Moment {
  const props: any = [date || Date.now()]

  if (strict) {
    props.push(MOMENT_FORMATS)
  }

  props.push(tz)

  return moment.tz.apply(null, props)
}

export { timezone, Moment }
