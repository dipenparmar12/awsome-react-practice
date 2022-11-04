import get from 'utils/getObjectVal'

/**
 *
 * @param {*} obj
 * @param {*} keys
 * @param {*} cb
 *
 */
function performAction(obj, cb, keys, ...args) {
  const _k = [keys, args].flat().filter(Boolean)
  const _keys = _k?.length ? _k : Object.keys(obj)
  return _keys.reduce((acc, key, inx) => {
    const val = get(obj, key)
    return cb(acc, val, key, obj, inx)
  }, undefined)
}

export default performAction

/* 
// Example 
person = {
    "name": "dipen parmar",
    "age": 12,
    "add": {
        "country": "India",
        "state": "Guj",
        "pincode": 123,
        "street": "12B",
        "city": "MyCity",
        "floor": "2nd floor"
    }
}

 performAction(
  person,
  (acc, v, k, o) => ((acc || '') + ' ' + v).trim(),
  [
    'name',
    'add.floor',
    'add.country',
  ],
) // returns  'dipen parmar 2nd floor India'
*/
