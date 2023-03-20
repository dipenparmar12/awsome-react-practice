/**
 * Determine whether the given value is a function.
 * @param {*} x
 * @returns {boolean}
 */
export function isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]'
}

/**
 * Determine whether the given value is empty or not.
 * @param {*} x 
 * @returns {boolean} 
 * @example
  isEmpty(null) //  true
  isEmpty('') //  true
  isEmpty({}) //  true
  isEmpty([]) //  true
  isEmpty({a: '1'}) //  false
*/
export function isEmpty(x) {
  return (
    [Object, Array].includes((x || {}).constructor) &&
    !Object.entries(x || {}).length
  )
}

/**
 * Determine whether the given value is a string.
 * @param {*} x
 * @returns {boolean}
 */
export function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]'
  //  return typeof x === 'object' && x !== null && !Array.isArray(x)
}
