/**
 *
 * @param {*} min
 * @param {*} max
 * @param {*} n
 * @src https://1loc.dev/random/generate-an-array-of-random-integers-in-a-given-range/
 */
function getArrayInRange(min, max, n) {
  return Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min,
  )
}

export default getArrayInRange
