/**
 * @param {Object} obj - Array of objects on which unwind will occur.
 * @param {String} key  key is used to unwind the object.
 * @param {String} keyRename key is used in final output.
 * @param {Boolean} deleteKeyAfterUnwind boolean value to delete the key after unwind.
 * @returns {Array} Array of objects with unwind.
 */
function unwindObj(obj, key, keyRename, deleteKeyAfterUnwind = true) {
  let result = []
  if (obj[key] instanceof Array) {
    obj[key].forEach((value) => {
      let newObj = Object.assign({}, obj)
      newObj[keyRename] = value
      if (deleteKeyAfterUnwind) {
        delete newObj[key]
      }
      result.push(newObj)
    })
  } else {
    let newObj = Object.assign({}, obj)
    newObj[keyRename] = obj[key]
    if (deleteKeyAfterUnwind) {
      delete newObj[key]
    }
    result.push(newObj)
  }
  return result
}

// var perons = { name: 'Hitesh', hobbies: ['Chess', 'Swimming'] }
// var hobbies = unwind(perons, 'hobbies', 'hobby')
// [
//   { name: 'Hitesh', hobby: 'Chess' },
//   { name: 'Hitesh', hobby: 'Swimming' },
// ]
