// import { isObject } from '../Assertion'

/**
 * Determine whether the given value is a string.
 * @param {*} x
 * @returns {boolean}
 */
export function isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]'
  //  return typeof x === 'object' && x !== null && !Array.isArray(x)
}


/**
 *
 * @param {Object} obj
 * @param {String} key  - key to group by (e.g. 'color') Optional
 * @returns {Array}
 * @example
 * const ObjCollect = {
 *   black:  { id: 11, color: '#000',  },
 *   white:  { id: 22, color: '#fff',  },
 *   gray:  { id: 33, color: '#ccc',  },
 * }
 * toArray(ObjCollect, key = 'name')
 * // [
   //   {"id": 11,"hex": "#000","name": "black"},
   //   {"id": 22,"hex": "#fff","name": "white"},
   //   {"id": 33,"hex": "#ccc","name": "gray"}
   // ]
 */

function toArray(obj, key) {
  if (!obj) return []
  return Object.keys(obj).map((k) => {
    const item = obj[k]
    console.log('toArray.js::[23] item', item)
    if (key && isObject(item)) {
      item[key] = k
    }
    return item
  })
}

export default toArray

/* 
  ========================================================
    Example
  ======================================================== 
   
  let ObjCollect = {
     black:  { id: 11, hex: '#000',  },
     white:  { id: 22, hex: '#fff',  },
     gray:  { id: 33, hex: '#ccc',  },
   }
  toArray(ObjCollect, key = 'name')
  // [
  //   {"id": 11,"hex": "#000","name": "black"},
  //   {"id": 22,"hex": "#fff","name": "white"},
  //   {"id": 33,"hex": "#ccc","name": "gray"}
  // ]
  */
