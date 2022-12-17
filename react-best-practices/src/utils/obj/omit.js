/**
 * @param {{}} obj
 * @param {string|String[]} deleteKeys
 * @returns {} obj
 * @example
 * const testObj = {
 *   id: 'id',
 *   name: 'name',
 *   one: 1,
 *   two: 22,
 *   three: 333,
 *   fourFive: 456,
 *   number: 1234567890,
 * }
 * omit(testObj, 'id')
 * omit(testObj, 'name')
 * omit(testObj, ['id', 'name'])
 * omit(testObj, ['number','id', 'name', 'one', 'two','three'])
 */
function omit(obj = {}, deleteKeys, ...args) {
  Array.isArray(deleteKeys) || (deleteKeys = [deleteKeys])
  if (args) deleteKeys.splice(deleteKeys.length, 0, ...args)

  return (
    Object.keys(obj).reduce((object, key) => {
      // if (key !== deleteKey) {
      //   object[key] = obj[key]
      // }
      if (!deleteKeys.includes(key)) {
        object[key] = obj[key]
      }
      return object
    }, {}) || {}
  )
}

export default omit

// const testObj = {
//   id: 'id',
//   name: 'name',
//   one: 1,
//   two: 22,
//   three: 333,
//   fourFive: 456,
//   number: 1234567890,
// }
// omit(testObj, 'id')
// omit(testObj, 'name')
// omit(testObj, ['id', 'name'])
// omit(testObj, ['number','id', 'name', 'one', 'two','three'])
