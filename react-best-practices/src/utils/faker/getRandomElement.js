/**
 * Get random one element from list of arrays
 * @param {array} array
 * @returns {mix}
 */
function getRandomElement(arr) {
  if (arr.constructor !== Array) return null
  if (arr.length === 0) return null
  if (arr.length === 1) return arr.shift()
  return arr[Math.floor(Math.random() * arr.length)]
}

// getRandomElement(['title', 'rating', 'year', 'genres']) //

// module.exports = getRandomElement;
export default getRandomElement
