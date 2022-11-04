/**
 *
 * @param {Array} collection
 * @param {*} newObj
 * @param {String} key
 * @returns {*}
 */
function insertUnique(collection, newObj, key = 'id') {
  if (!collection?.findIndex) return collection
  if (!newObj?.[key]) return collection

  const result = [...collection]
  const index = collection.findIndex((i) => i[key] === newObj[key])

  if (index > -1) result.splice(index, 1) // Remove element if already exits in collection

  result.splice(result.length, 1, newObj) // Insert element at end of the collection

  return result
}

export default insertUnique
