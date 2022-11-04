/**
 *
 * @param {Array} collection
 * @param {*} newObj
 * @param {String} key
 * @returns {*}
 */
function insertRemove(collection, newObj, key = 'id') {
  if (!collection?.findIndex) return collection
  if (!newObj?.[key]) return collection

  const result = [...collection]
  const index = collection.findIndex((i) => i[key] === newObj[key])

  if (index > -1) {
    result.splice(index, 1) // Remove element if already exits in collection
  } else {
    result.splice(result.length, 1, newObj) // Insert element at end of the collection
  }

  return result
}

export default insertRemove

/* 
========================================================
  example
======================================================== 

coll = [
  { id: 1, name: 'dipen', age: 44 },
  { id: 2, name: 'john', age: 23 },
  { id: 3, name: 'hites', age: 35 },
]

insertRemove(coll, { id: 1, name: 'newOb' }, 'id') // ID found, id:1 object will remove
insertRemove(coll, { id: 123, name: 'newOb' }, 'name') // Name not found, new Object inserted
insertRemove(coll, { id: 4, name: 'john' }, 'id') // ID not found, new Object inserted
*/
