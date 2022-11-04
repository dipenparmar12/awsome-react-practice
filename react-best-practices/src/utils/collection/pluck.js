/**
 * Extract values of a property from an array of objects
 * @param {Array[Object]} collection
 * @param {Array} array of items
 * @src https://1loc.dev/object/extract-values-of-a-property-from-an-array-of-objects/
 */
function pluck(collection, property) {
  if (!collection?.length) return []
  return collection?.map((obj) => obj[property])
}

export default pluck

/*
pluck(
  [
    { name: 'John', age: 20 },
    { name: 'Smith', age: 25 },
    { name: 'Peter', age: 30 },
  ],
  'name'
)
// ['John', 'Smith', 'Peter']

*/

/**
 * PlunkV2
 * Better and full featured implementation of pluck method
 * @param {Array[Object]} collection 
 * @param {String|String[]|Array} input - Property name or array of property names
 * @returns {Array}
 *
 * @example
 ```
 pluck(
  [
    { name: 'John', age: 20 },
    { name: 'Smith', age: 25 },
    { name: 'Peter', age: 30 },
  ],
  'name'
)
// ['John', 'Smith', 'Peter']
 ```
 */
/*
function pluck(collection, input, ...args) {
  if (!collection?.length) return []
  if (!Array.isArray(input)) input = [input]
  return collection.reduce((prevObjs, currentObj) => {
    return input.reduce((prev, current) => {
      return current in currentObj ? [...prev, currentObj[current]] : prev
    }, prevObjs)
  }, [])
}

*/
