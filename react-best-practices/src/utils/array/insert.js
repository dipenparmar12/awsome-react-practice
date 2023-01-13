/**
 * Insert an item into an array at a specific index (JavaScript)
 * @param {Array} arr
 * @param {*} value
 * @param {Number} index
 * @see https://stackoverflow.com/a/586189/8592918
 */
function insert(arr, value, index) {
  return arr.splice(index, 0, value)
}

export default insert
