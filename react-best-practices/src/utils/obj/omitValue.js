/**
 *
 * @param {*} obj
 * @param {String|String[]} values
 * @returns {*} obj
 */
function omitValue(obj, values, recursive) {
  let newObj = {}
  Array.isArray(values) || (values = [values])
  Object.keys(obj).forEach((prop) => {
    if (!values.includes(obj[prop])) {
      newObj[prop] = obj[prop]
    }
  })
  return newObj
}

export default omitValue
