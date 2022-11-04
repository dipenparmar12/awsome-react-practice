/**
 *
 * @param {*} val
 * @returns {string} 'Yes' or 'No'
 */
function boolToStr(val) {
  if ([true, 'true', 1].includes(val)) {
    return 'Yes'
  }
  if ([false, 'false', 0].includes(val)) {
    return 'No'
  }
  return val
}

export default boolToStr
