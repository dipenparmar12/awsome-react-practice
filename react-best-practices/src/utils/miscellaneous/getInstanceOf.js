/**
 * Get instanceOf
 * @param {Object} object
 * @param consoleLog
 * @returns {Object}
 */
function getInstanceOf(object, consoleLog = false) {
  if (consoleLog) {
    console.log('getInstanceOf::', object.constructor.name)
  }
  return object.constructor.name
}

// const onlyDefinedKeys = getInstanceOf("something");
// module.exports = getInstanceOf;
export default getInstanceOf
