/**
 * Sort an array of items by given key
 * @param {*} arr
 * @param {*} k
 * @src https://1loc.dev/array/sort-an-array-of-items-by-given-key/
 */
function sortBy(collection, key, order = 'asc') {
  return collection.sort((a, b) => {
    if (order === 'asc') {
      return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
    } else {
      return a[key] < b[key] ? 1 : a[key] > b[key] ? -1 : 0
    }
  })
}

export default sortBy

/* 
const people = [
    { name: 'Foo', age: 42 },
    { name: 'Bar', age: 24 },
    { name: 'Fuzz', age: 36 },
    { name: 'Baz', age: 32 },
];
// Accessending 
sortBy(people, 'age');

// [
//   { name: 'Bar', age: 24 },
//   { name: 'Baz', age: 32 },
//   { name: 'Fuzz', age: 36 },
//   { name: 'Foo', age: 42 },
// ]

// Descending 
sortBy(people, 'age', false);
  // 0:{name: 'Foo', age: 42}
  // 1:{name: 'Fuzz', age: 36}
  // 2:{name: 'Baz', age: 32}
  // 3:{name: 'Bar', age: 24}

*/

// function sortBy(arr, k) {
//   return arr.concat().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0))
// }
