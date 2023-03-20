/**
 * Gets the last element of `array`.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @src: https://github.com/lodash/lodash/blob/master/last.js
 * @example
 *
 * last([1, 2, 3])
 * // => 3
 */
function getLast(array) {
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : undefined
}

export default getLast
