/**
 * @param {number} no
 * @param toFixedBy
 * @param defaultVal
 * @return number
 */
function castFloat(no, toFixedBy, defaultVal = 0.0) {
  let output = parseFloat(no)
  output = isNaN(output) ? defaultVal : no
  return toFixedBy ? output.toFixed(toFixedBy) : output
}

export default castFloat
