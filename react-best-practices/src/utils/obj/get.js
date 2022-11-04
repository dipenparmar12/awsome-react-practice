/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/**
 * Get value from a deeply nested object using a string path.
 * @param {*} object The object to query.
 * @param {Array|string} path (): The path of the property to get.
 * @param {*} defaultValue The value returned for undefined resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 * ```
 * const object = { a: { b: { c: 3 } } }
 * get(object, 'a.b.c')
 * // => 3
 * ```
 * @example
 * ```
 * const object = { a: [{ b: { c: 3 } }] }
 * get(object, 'a[0].b.c')
 * // => 3
 * ```
 * @example
 * ```
 * const object = { a: [{ b: { c: 3 } }] }
 * get(object, 'a[0].b.c', 'default')
 * // => 3
 * ```
 */
function get(object, path, defaultValue) {
  let paths = []
  const isString = typeof path === 'string'
  paths = isString ? path.replace(/\[(\d+)\]/g, '.$1').split('.') : path
  let result = object
  let i = 0
  const { length } = paths
  while (result != null && i < length) {
    result = result[paths[i++]]
  }
  return result == null || i !== length ? defaultValue : result
}

export default get
