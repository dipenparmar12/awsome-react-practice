/**
 *
 * @param {*} n
 * @param {*} fn
 * @returns {Array} arr
 */
function rangeMap(n, fn) {
  const arr = []
  while (n > arr.length) {
    arr.push(fn(arr.length))
  }
  return arr
}

// rangeMap(3, (i) => i) // [0, 1, 2]
// rangeMap(3, (i) => i + 1) //  [1, 2, 3]

export default rangeMap
