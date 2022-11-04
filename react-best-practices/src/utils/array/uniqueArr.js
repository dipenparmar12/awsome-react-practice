/**
 * Get the unique values of an array
 * @param {*} arr
 * @src https://1loc.dev/array/get-the-unique-values-of-an-array/
 */
function uniqueArr(arr) {
  return [...new Set(arr)]
}

export default uniqueArr
