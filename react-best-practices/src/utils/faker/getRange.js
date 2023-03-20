/**
 *
 * @param {*} min
 * @param {*} max
 * @returns {Array|Array[Number]} arr
 */
function getRange(min, max) {
  // If only one number is provided, start at one
  if (max === undefined) {
    max = min
    min = 1
  }

  // Create a ranged array
  return Array.from(new Array(max - min + 1).keys()).map(function (num) {
    return num + min
  })
}

// getRange(4, 10) // (7) [4, 5, 6, 7, 8, 9, 10]
// getRange(1, 10) // (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default getRange
