/**
 * Check if a date is between two dates
 * Note: `min`, `max` and `date` are `Date` instances
 * @param {*} date
 * @param {*} min
 * @param {*} max
 * @src https://1loc.dev/validator/check-if-a-date-is-between-two-dates/
 */
function isBetween(date, min, max) {
  return date.getTime() >= min.getTime() && date.getTime() <= max.getTime()
}

export default isBetween
