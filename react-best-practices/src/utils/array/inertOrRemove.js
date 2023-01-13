/**
 *
 * @param {Array} Arr
 * @param {*} Item
 * @returns {*}
 */
function insertOrRemove(Arr, Item) {
  if (!Arr || !Arr?.findIndex) return Arr

  const result = [...Arr]
  const index = Arr.findIndex((i) => i === Item)

  if (index > -1) {
    result.splice(index, 1) // Remove element if already exits in arr
  } else {
    result.splice(result.length, 1, Item) // Insert element at end of the collection
  }

  return result
}

export default insertOrRemove

/* 
========================================================
  example
======================================================== 

items = [1,2,5,4]
insertOrRemove(items, 3, null) // 3 not exits that's inserted 
insertOrRemove(items, 4, null) // exits that's removed
insertOrRemove(items, 'test', null) // 'test' not exits that's inserted
*/
