/**
 * Number to ruppee converter
 * @param {*} $number
 * @param {*} $locate
 * @returns {String} str
 */
function toRs($number, $locate = 'en-IN') {
  return !isNaN(parseInt($number))
    ? /*'₹' + */ parseInt($number).toLocaleString($locate)
    : 0
}

export default toRs
