/**
 *
 * @param {*} ms
 * @returns
 */
async function delay(ms = 150) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export default delay
