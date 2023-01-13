/**
 * Get value from a deeply nested object using a string path.
 * @param {Object} obj
 * @param {String} path  the string path <user.name | user.car.color>
 * @param {String} fallback
 * @param {*} index
 * @returns
 */
export default function get(obj = {}, path, fallback, index = 0) {
  const key = typeof path === 'string' ? path.split('.') : [path]

  for (index = 0; index < key.length; index += 1) {
    if (!obj) break
    obj = obj[key[index]]
  }

  return obj === undefined ? fallback : obj
}

// get({ a: { b: 'Hello World' } }, 'a.b') // 'Hello World';

// @src: https://1loc.dev/object/get-the-value-at-given-path-of-an-object/
// const getValue = (obj, path) =>
//   path.split('.').reduce((acc, c) => acc && acc[c], obj)
