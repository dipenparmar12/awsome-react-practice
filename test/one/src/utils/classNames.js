/**
 *
 * @param {*} arr
 * @returns {Array}
 * @example arrayFlatten([1, [2, [3, [4, 5]]]], 6, 7, 8, 9), // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
function flatten(arr, ...args) {
  // eslint-disable-next-line no-param-reassign
  Array.isArray(arr) || (arr = [arr])
  return [...arr, ...args].reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val),
    [],
  )
}

export default function cn(...args) {
  return flatten(args).join(' ')
}

// console.log(
//   'classNames.js::[22]',
//   '',
//   arrayFlatten([1, [2, [3, [4, 5]]]]), // [1, 2, 3, 4, 5]
//   arrayFlatten([1, [2, [3, [4, 5]]]], 6, 7, 8, 9), // [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   arrayFlatten([1, [2, [3, [4, 5]]]], true), // [1, 2, 3, [4, 5]]
//   arrayFlatten([1, [2, [3, [4, 5]]]], false), // [1, 2, 3, [4, 5]]
//   arrayFlatten([1, [2, [3, [4, 5]]]], true, true), // [1, 2, 3, 4, 5]
//   arrayFlatten([1, [2, [3, [4, 5]]]], false, true), // [1, 2, 3, [4, 5]]',
//   arrayFlatten([1, [2, [3, [4, 5]]]]), // [1, 2, 3, 4, 5]
//   arrayFlatten([1, [2, [3, [4, 5]]]], true), // [1, 2, 3, [4, 5]]
//   arrayFlatten([1, [2, [3, [4, 5]]]], false), // [1, 2, 3, [4, 5]]
//   arrayFlatten([1, [2, [3, [4, 5]]]], true, true), // [1, 2, 3, 4, 5]
//   arrayFlatten([1, [2, [3, [4, 5]]]], false, true) // [1, 2, 3, [4, 5]])
// )
