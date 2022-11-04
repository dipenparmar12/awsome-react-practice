/* eslint-disable no-plusplus */
let currentID = 0
/**
 * Generate global id for react key attribute
 * @param {string} prefix optional prefix
 * @returns {string}
 */
function generateKey(index = '_') {
  return String(index) + (currentID++).toString()
  // return (currentID++).toString()
  // return `${Math.random().toString(36).substr(2, 9)}`
}

export default generateKey
