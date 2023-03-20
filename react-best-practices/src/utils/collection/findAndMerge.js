import deepCopy from '../obj/deepCopy'
import deepMerge from '../obj/deepMerge'

/**
 * @description
 * @param {Array} arrList
 * @param {*} newObj
 * @param {String} key
 * @param {String} returns /// item, array, both
 * @returns {Boolean} deepMerge
 */
function findAndMerge(
  arrList,
  newObj,
  key,
  returns = 'both', /// item, array, both
  canDeepMerge = true,
) {
  const index = arrList.findIndex((i) => i[key] === newObj[key])
  let arrCopy = deepCopy(arrList)

  if (index > -1) {
    arrCopy[index] = canDeepMerge ? deepMerge(arrCopy[index], newObj) : newObj
    // arrList.splice(index, 1, newData)
  }

  if (returns === 'item') return arrCopy[index]
  if (returns === 'array') return arrCopy
  if (returns === 'both') return { item: arrCopy[index], array: arrCopy }
  return arrCopy
}

export default findAndMerge

/* 
========================================================
  example
======================================================== 
*/

// const listItems = [
//   { id: 1, name: 'test1' },
//   { id: 2, name: 'test2', isAdmin: false },
// ]

// const obj = findAndMerge(
//   listItems,
//   { id: 2, name: 'Tes 1 New Name', isAdmin: true },
//   'id',
//   'both', // item, array, both
// )

// const newListItems = obj.array // [{ id: 2, name: 'Tes 1 New Name', isAdmin: true }, { id: 1, name: 'test1' }, ]
// const mergedItem = obj.item // { id: 2, name: 'Tes 1 New Name', isAdmin: true }
