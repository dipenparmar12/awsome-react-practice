/**
 *
 * @param {*} input
 * @param {*} input2
 * @returns {boolean} true if the two arrays are equal
 * @example isEqual([{ a: 1 }, { a: 2 }]) // false
 * @example isEqual({ a: 1 }, { a: 1 }) //  true
 * @example isEqual(1,1) // false
 */
const isEqual = (input1, input2) => {
  if (input1 === input2) return true
  if (typeof input1 !== 'object' || typeof input2 !== 'object') return false
  const input1Keys = Object.keys(input1)
  const input2Keys = Object.keys(input2)
  if (input1Keys.length !== input2Keys.length) return false
  return input1Keys.every((key) => isEqual(input1[key], input2[key]))
}
