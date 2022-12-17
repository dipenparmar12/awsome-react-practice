/**
 *
 * @param {Array} arr
 * @param {Number} maxLength
 * @return {Array} arr
 */
function shuffle(arr, maxLength = 3) {
  const input = [...arr]
  const output = []
  while (output.length < maxLength) {
    const pos = Math.floor(Math.random() * input.length)
    const randomEl = input[pos]
    output.push(randomEl)
    // !output.includes(randomEl) && output.push(randomEl) // unique values only
  }
  return output
}

// @src https://1loc.dev/array/shuffle-an-array/
// function shuffle(arr) {
//   return arr.sort(() => 0.5 - Math.random())
// }

//  Modify orignal array
// function shuffle(arr) {
//   let last = arr.length
//   let random

//   let randInt = (n) => Math.floor(Math.random() * n)

//   let swap = function (arr, a, b) {
//     return ([arr[a], arr[b]] = [arr[b], arr[a]])
//   }

//   while (last > 0) {
//     random = randInt(last)
//     swap(arr, --last, random)
//   }

//   return arr
// }

export default shuffle
