/**
 * Create an object composed of the picked object properties
 * @param {Object} object
 * @param {string|String[]} keys
 * @returns {Object}
 * @example
 * ```
 * const object = { a: 1, b: 2, c: 3 }
 * pick(object, 'a', 'b')
 * // => { a: 1, b: 2 }
 * ```
 * @example
 * ```
 * const object = { a: 1, b: 2, c: 3 }
 * pick(object, ['a', 'b'])
 * // => { a: 1, b: 2 }
 * ```
 * @example
 * ```
 * const object = { a: 1, b: 2, c: 3 }
 * pick(object, 'a', 'b', 'd')
 * // => { a: 1, b: 2 }
 * ```
 */
function pick(object, keys, ...args) {
  Array.isArray(keys) || (keys = [keys])
  if (args) keys.splice(keys.length, 0, ...args) // merge two keys

  return keys.reduce((obj, key) => {
    if (object && Object.prototype.hasOwnProperty.call(object, key)) {
      // eslint-disable-next-line no-param-reassign
      obj[key] = object[key]
    }
    return obj
  }, {})
}

// const testObj = {
//   id: 'id1',
//   name: 'name2',
//   one: 1,
//   two: 22,
//   three: 333,
//   fourFive: 456,
//   number: 1234567890,
//   str: ' hello',
//   date: '2021-12-20',
// }

// pick(testObj, 'id', 'str') // {id: 'id', str:'hello'}
// pick(testObj, ['one', 'name'], 'str', 'date', 'not_found')
// pick(testObj, 'name', 'id', 'two') // {name: 'name', id: 'id', two: 22}
// pick(testObj, ['id', 'name'])
// pick(testObj, ['number', 'id', 'three'])
// pick(testObj, ['unknown', 'id'])
