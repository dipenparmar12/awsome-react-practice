/**
 * Search value inside array of Object
 * @param {Object} arrOfObj
 * @param {string[]} keys
 * @param {*} values
 * @param  {...any} rest
 * @returns {Array[Object]} arr[...obj]
 * @src: https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
 */
function findVal(arrOfObj, key, values, ...args) {
  Array.isArray(values) || (values = [values])
  if (args) values.splice(values.length, 0, ...args) // merge arrays
  return arrOfObj && arrOfObj.filter((el) => values.includes(el[key]))
}

export default findVal

// var testInventory = [
//   { name: 'apples', qty: 2, dry: true },
//   { name: 'bananas', qty: 0, dry: false },
//   { name: 'cherries', qty: 5, dry: false },
//   { name: 'cherries', qty: 2, dry: true },
//   { name: 'apple', qty: 3, dry: true },
//   { name: 'kivi', qty: 10, dry: true },
// ]

// findVal(testInventory, 'name', 'apple') // {name: 'apple', qty: 3, dry: true}
// findVal(testInventory, 'qty', [0, 2]) // [{name: 'apples', qty: 2, dry: true}, {qry:0,...}]
// findVal(testInventory, 'qty', [10]) // [{name: 'kivi', qty: 10, dry: true}]
// findVal(testInventory, 'dry', true) // all obj those have dry=true

/*
var findCherries = (fruit) => fruit.name === 'cherries'
console.log(testInventory.find(findCherries)) // { name: 'cherries', qty: 5 }
 */

// /**
//  * Represents a search trough an array.
//  * @function search
//  * @param {Array} array - The array you wanna search trough
//  * @param {string} key - The key to search for
//  * @param {string} [prop] - The property name to find it in
//  */
// function search(array, key, prop){
//     // Optional, but fallback to key['name'] if not selected
//     prop = (typeof prop === 'undefined') ? 'name' : prop;

//     for (var i=0; i < array.length; i++) {
//         if (array[i][prop] === key) {
//             return array[i];
//         }
//     }
// }
