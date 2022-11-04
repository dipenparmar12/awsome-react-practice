/**
 * @param {*} data
 * @param {*} key
 * @returns {Array}
 */
function groupBy(data, key) {
  if (!data) return []
  return data.reduce((acc, item) => {
    const group = item[key]
    acc[group] = acc[group] || []
    acc[group].push(item)
    return acc
  }, {})
}

/* 
========================================================
  example
======================================================== 
*/

// var collect = [
//   { id: 11, dir: 'left', color: 'red' },
//   { id: 22, dir: 'right', color: 'green' },
//   { id: 33, dir: 'top', color: 'red' },
//   { id: 44, dir: 'bottom', color: 'green' },
// ]
// groupBy(collect, 'color')

// const res = {
//   red: [
//     { id: 11, dir: 'left', color: 'red' },
//     { id: 33, dir: 'top', color: 'red' },
//   ],
//   green: [
//     { id: 22, dir: 'right', color: 'green' },
//     { id: 44, dir: 'bottom', color: 'green' },
//   ],
// }

export default groupBy
