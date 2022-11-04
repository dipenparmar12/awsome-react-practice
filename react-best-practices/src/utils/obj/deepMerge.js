/**
 * Merge one or more object and Clone an object recursively. Array,Date,RegExp,Object,Map,Set
 * @param {*} obj
 * @returns {*}
 * @example
  ```
    const obj = { name: 'John', age: 0,city: 'New York' }
    const obj2 = { name: 'new John', age: 50, }
    deepCloneMerge(obj, obj2)
    // { name: 'new John', age: 50, city: 'New York' }
  ```
 */
function deepMerge(obj, ...args) {
  if (obj === null || typeof obj !== 'object') return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Map) return new Map(obj)
  if (obj instanceof Set) return new Set(obj)
  if (obj instanceof Array) return obj.map((v) => deepMerge(v))
  if (obj instanceof Object) return Object.assign({}, obj, ...args)
  return obj
}

export default deepMerge
