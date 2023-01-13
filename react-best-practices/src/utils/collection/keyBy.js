/**
 * Convert an array of objects to a single object (duplicate of toObject)
 * @param {*} data
 * @param {*} key
 * @returns
 * @src https://codereview.stackexchange.com/a/123735/251248
 */
function keyBy(data, key) {
  return data?.reduce((acc, obj, currentIndex) => {
    return { ...acc, [obj[key] || currentIndex]: obj }
  }, {})
}

// var collect = [
//   { id: 11, dir: 'left', code: 97 },
//   { id: 22, dir: 'right', code: 100 },
//   { id: 33, dir: 'top', code: 100 },
//   { id: 44, dir: 'bottom', code: 100 },
// ]
// keyBy(collect, 'id') // { 11:{id:11,dir:"left",code:97}, 22:{id:22,dir:"right",code:100}, ...};
// keyBy(collect, 'dir')

// keyBy(
//   [ { key: 1, val: '2' }, { key: 1, val: '2' },],
//   'key',
// )
// var result = {
//   '1': {
//     key: 1,
//     val: '2',
//   },
// }

export default keyBy
