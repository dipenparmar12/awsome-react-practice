//  TODO: https://github.com/ramda/ramda/issues/3078#issuecomment-682119083

/**
 * @param {Array} arrayOfObjects - Array of objects on which unwind will occur.
 * @param {String|arrayOfKeys} The array of keys which you want to unwind.
 * @param {String=|arrayOfKeys=}  keysRename keys is used in final output. optional parameter, if not provided, then the key will be same as the key in the input array.
 * @param {Boolean} deleteKeyAfterUnwind boolean value to delete the key after unwind.
 * @returns {Array} Array of objects with unwind.
 * @examples
 * // var persons = [
 * //   { name: 'Dipen', hobbies: ['cricket', 'football'], colors: ['RED', 'GREEN'] },
 * //   { name: 'john', hobbies: ['football', 'cricket'] },
 * // ]
 * //  unwind(persons, ['hobbies','colors'], ['hobby', 'color'], true)])
 * // [
 * //   { name: 'Dipen', hobby: 'cricket' },
 * //   { name: 'Dipen', hobby: 'football' },
 * //   { name: 'Dipen', color: 'RED' },
 * //   { name: 'Dipen', color: 'GREEN' },
 * //   { name: 'john', hobby: 'football' },
 * //   { name: 'john', hobby: 'cricket' },
 * // ]
 * // const persons2 = [
 * //   { name: 'Dipen', hobbies: ['cricket', 'football'], colors: ['RED', 'GREEN'] },
 * //   { name: 'Hitesh', hobbies: ['Chess', 'Swimming'], colors: ['BLUE'] },
 * // ]
 * // unwindObj(persons2, 'colors', 'newColor')
 * // [
 * // {name: 'Dipen', hobbies: ['cricket', 'football'], newColor: 'RED'},
 * // {name: 'Dipen', hobbies: ['cricket', 'football'], newColor: 'GREEN'},
 * // {name: 'Hitesh', hobbies: ['Chess', 'Swimming'], newColor: 'BLUE'},
 * //]
 */
function unwindObj(
  arrayOfObjects,
  unwindKeys,
  keysRename,
  deleteKeysAfterUnwind = true,
) {
  unwindKeys = Array.isArray(unwindKeys) ? unwindKeys : [unwindKeys]
  keysRename = Array.isArray(keysRename) ? keysRename : [keysRename]

  const result = []
  arrayOfObjects.forEach((obj) => {
    unwindKeys.forEach((key, index) => {
      let array = obj[key]
      array = Array.isArray(array) ? array : [array]
      array.forEach((item) => {
        const newObj = { ...obj }
        if (keysRename.length > 0) {
          newObj[keysRename[index]] = item
        } else {
          newObj[key] = item
        }
        result.push(newObj)
      })
    })
  })
  if (deleteKeysAfterUnwind) {
    unwindKeys.forEach((key) => {
      result.forEach((obj) => {
        delete obj[key]
      })
    })
  }
  return result
}
export default unwindObj

// var persons = [
//   { name: 'Dipen', hobbies: ['cricket', 'football'], colors: ['RED', 'GREEN'] },
//   { name: 'Hitesh', hobbies: ['Chess', 'Swimming'], colors: ['BLUE'] },
// ]
// var hobbies = unwind(persons, 'hobbies', 'hobby')
// [
//   { name: 'Dipen', hobby: 'cricket' },
//   { name: 'Dipen', hobby: 'football' },
//   { name: 'Hitesh', hobby: 'Chess' },
//   { name: 'Hitesh', hobby: 'Swimming' },
// ]

// /**
//  * @param {Array} arrayOfObjects - Array of objects on which unwind will occur.
//  * @param {String} key  key is used to unwind the object.
//  * @param {String} keyRename key is used in final output.
//  * @param {Boolean} deleteKeyAfterUnwind boolean value to delete the key after unwind.
//  * @returns {Array} Array of objects with unwind.
//  */
// function unwind(arrayOfObjects, key, keyRename, deleteKeyAfterUnwind = true) {
//   let result = []
//   arrayOfObjects.forEach((obj) => {
//     if (obj[key] instanceof Array) {
//       obj[key].forEach((value) => {
//         let newObj = Object.assign({}, obj)
//         newObj[keyRename] = value
//         if (deleteKeyAfterUnwind) {
//           delete newObj[key]
//         }
//         result.push(newObj)
//       })
//     } else {
//       let newObj = Object.assign({}, obj)
//       newObj[keyRename] = obj[key]
//       if (deleteKeyAfterUnwind) {
//         delete newObj[key]
//       }
//       result.push(newObj)
//     }
//   })
//   return result
// }

// // function unwind(key, keyRename, arrayOfObjects, deleteKey) {
// //   // return arrayOfObjects.reduce((acc, obj) => {
// //   //   obj[key].forEach((val) => {
// //   //     acc.push({
// //   //       [keyRename]: val,
// //   //       ...obj,
// //   //     })
// //   //   })
// //   //   return acc
// //   // }, [])
// // }

// export default unwind

// // var persons = [
// //   { name: 'Dipen', hobbies: ['cricket', 'football'] },
// //   { name: 'Hitesh', hobbies: ['Chess', 'Swimming'] },
// // ]
// // var hobbies = unwind(persons, 'hobbies', 'hobby')
// // [
// //   { name: 'Dipen', hobby: 'cricket' },
// //   { name: 'Dipen', hobby: 'football' },
// //   { name: 'Hitesh', hobby: 'Chess' },
// //   { name: 'Hitesh', hobby: 'Swimming' },
// // ]

//  opposite of unwind
//  var hobbies = [
//   { name: 'Dipen', hobby: 'cricket' },
//   { name: 'Dipen', hobby: 'football' },
//   { name: 'Hitesh', hobby: 'Chess' },
//   { name: 'Hitesh', hobby: 'Swimming' },
// ]
// var persons = groupBy(hobbies, 'name')
// [
//   { name: 'Dipen', hobbies: ['cricket', 'football'], colors: ['RED', 'GREEN'] },
//   { name: 'Hitesh', hobbies: ['Chess', 'Swimming'], colors: ['BLUE'] },
// ]
