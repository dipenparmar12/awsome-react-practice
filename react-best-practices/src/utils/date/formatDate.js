import { format } from 'date-fns'
/**
 * @param {*} date
 * @param {string} formatStr
 * @param fallback
 * @doc https://date-fns.org/v2.22.1/docs/format
 */
const formatDate = (date, formatStr = 'd MMM yyy', fallback = null) => {
  try {
    if (!date) return fallback
    return typeof date.getMonth === 'function' // determine given date is DateObject or stringDate
      ? format(date, formatStr)
      : format(new Date(date), formatStr)
  } catch (e) {
    console.log('format_date.js::14 e', e)
    return fallback
  }
}

export default formatDate

// /**
//  * @param {*} date
//  * @param {string} date
//  */
// export const parseDate = (date) => {
//   return typeof date?.getMonth === 'function' // determine given date is DateObject or stringDate
//     ? date
//     : new Date(date)
// }
