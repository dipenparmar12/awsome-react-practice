/**
 *
 * @param {*} sourceObj
 * @param {String|String[]} keys
 * @returns {Object} obj
 * @src
 */
function cloneAndPluck(sourceObj, keys) {
  // const _keys =
  //   Object.prototype.toString.call(keys) === '[object Array]' ? keys : [keys]
  Array.isArray(keys) || (keys = [keys])

  return Object.values(keys).reduce(function (acc, key) {
    return sourceObj[key] && (acc[key] = sourceObj[key]), acc
  }, {})
}

// var testObj = {
//   id: 'id',
//   name: 'name',
//   one: 1,
//   two: 22,
//   three: 333,
//   fourFive: 456,
//   number: 1234567890,
//   str: 'hello john',
// }

// cloneAndPluck(testObj, ['id', 'name']) // {"id": "id", "name": "name"}
// cloneAndPluck(testObj, ['str', 'not_found']) // { "str": "hello john" }
// cloneAndPluck(testObj, []) // {}

export default cloneAndPluck
