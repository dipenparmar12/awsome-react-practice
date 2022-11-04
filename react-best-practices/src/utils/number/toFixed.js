/**
 * @param {Number | bigint } num
 * @param options
 * @return {Number}
 */
function toFixed(num, decimals = 1, fallback) {
  // console.log('toFixed.js::[7] ', { num, decimals, fallback })
  try {
    return num.toFixed(decimals) * 1
  } catch (error) {
    // console.error('toFixed.js::[12] error', error)
    return fallback !== undefined ? fallback : num
  }
}

export default toFixed
