/**
 * Convert an array of objects to a single object (duplicate of keyBy)
 * @param {Array} arr
 * @param {String} key
 * @returns {Object} obj
 * @src https://1loc.dev/array/convert-an-array-of-objects-to-a-single-object/
 */
function toObject(arr, key) {
  if (arr.length === 0) return {}
  return arr.reduce((a, b) => ({ ...a, [b[key]]: b }), {})
}
// // Or
// const toObject = (arr, key) =>
//   Object.fromEntries(arr.map((it) => [it[key], it]))

export default toObject

//
/*

toObject(
  [
      { id: '1', name: 'Alpha', gender: 'Male' },
      { id: '2', name: 'Bravo', gender: 'Male' },
      { id: '3', name: 'Charlie', gender: 'Female' },
  ],
  'id'
)

{
  '1': { id: '1', name: 'Alpha', gender: 'Male' },
  '2': { id: '2', name: 'Bravo', gender: 'Male' },
  '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/
