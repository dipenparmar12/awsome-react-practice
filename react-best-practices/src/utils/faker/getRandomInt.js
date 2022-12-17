/**
 *
 * @param {*} min
 * @param {*} max
 * @returns Integer
 * @desc Returns a random number between min (inclusive) and max (exclusive)
 * @src https://stackoverflow.com/a/1527820/8592918
 * @example getRandomInt(1, 10) //  1 to 10
 * @example getRandomInt(400, 500) //  400 to 500
 */
function getRandomInt(min = 0, max = 1000) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// getRandomInt(1, 10) //  1 to 10
// getRandomInt(400, 500) //  400 to 500

export default getRandomInt
