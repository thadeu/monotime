import moment, { Moment } from 'moment-timezone'

moment.tz.load({
  version : 'latest',
  zones : [
    "America/Sao_Paulo|LMT -03 -02|36.s 30 20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|20e6"
  ],
  links : [
      'America/Sao_Paulo'
  ]
})

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
