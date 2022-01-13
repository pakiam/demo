import dayjs from 'dayjs'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import weekday from 'dayjs/plugin/weekday'
import isoWeek from 'dayjs/plugin/isoWeek'

const monthFormat = 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split(
  '_'
)
const monthStandalone = 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split(
  '_'
)

const monthShortFormat = 'янв_февр_мар_апр_мая_июн_июл_авг_сен_окт_ноя_дек'.split(
  '_'
)
const monthShortStandalone = 'янв_февр_март_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split(
  '_'
)

const MONTHS_IN_FORMAT = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/
const locale = {
  name: 'ru',
  weekdays: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split(
    '_'
  ),
  weekdaysShort: 'вск_пнд_втр_срд_чтв_птн_сбт'.split('_'),
  weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
  months: (dayjsInstance, format) => {
    if (MONTHS_IN_FORMAT.test(format)) {
      return monthFormat[dayjsInstance.month()]
    }
    return monthStandalone[dayjsInstance.month()]
  },
  monthsShort: (dayjsInstance, format) => {
    if (MONTHS_IN_FORMAT.test(format)) {
      return monthShortFormat[dayjsInstance.month()]
    }
    return monthShortStandalone[dayjsInstance.month()]
  },
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D MMMM YYYY г.',
    LLL: 'D MMMM YYYY г., H:mm',
    LLLL: 'dddd, D MMMM YYYY г., H:mm'
  },
  relativeTime: {
    future: 'через %s',
    past: '%s назад',
    s: 'несколько секунд',
    m: 'минута',
    mm: '%d минут',
    h: 'час',
    hh: '%d часов',
    d: 'день',
    dd: '%d дней',
    M: 'месяц',
    MM: '%d месяцев',
    y: 'год',
    yy: '%d лет'
  },
  ordinal: n => n
}

dayjs.locale({ ...locale, weekStart: 1 })

export default {
  // https://github.com/iamkun/dayjs/blob/dev/docs/en/API-reference.md#difference-diffcompared-dayjs-unit-string-float-boolean
  install (Vue, options) {
    dayjs.extend(weekday)
    dayjs.extend(isSameOrAfter)
    dayjs.extend(isSameOrBefore)
    dayjs.extend(quarterOfYear)
    dayjs.extend(isoWeek)
    Vue.config.globalProperties.$date = dayjs
    // Vue.prototype.$date = dayjs
    // Vue.prototype.$date.prototype = dayjs.prototype;
    Vue.config.globalProperties.$date.prototype.prettyDate = date => {
      date = dayjs(date)
      const diff = this.diff(date, 'day')
      if (!diff) {
        return this.format('h mm A')
      } else if (diff === 1) {
        return `Yesterday, ${this.format('h mm A')}`
      } else {
        return this.format('MMMM DD, YYYY h  mm A')
      }
    }
    // Vue.filter('prettyDate', function (date, format = 'MMMM DD, YYYY h  mm A') {
    //   return dayjs(date).format(format)
    // })
  }
}
