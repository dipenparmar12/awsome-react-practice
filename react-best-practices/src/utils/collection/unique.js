/**
 *
 * @param obj
 * @returns Object
 * get distinct values from an array of objects in JavaScript?
 */
function getDistictValue(obj, key) {
  return [...new Map(obj.map((item) => [item[key], item])).values()]
}

// Scr: https://stackoverflow.com/a/64334282/8592918
function unique(arr, props = []) {
  return [
    ...new Map(
      arr.map((entry) => [props.map((k) => entry[k]).join('|'), entry]),
    ).values(),
  ]
}

export default unique
// var data = [
//   {
//     id: 1,
//     name: 'a',
//   },
//   {
//     id: 2,
//     name: 'a',
//   },
//   {
//     id: 3,
//     name: 'ab',
//   },
//   {
//     id: 4,
//     name: 'ab',
//   },
// ]

// // d1 = getUniqeObject(data, 'name')
// 0: {id: 6, name: "a", age: 18}
// 1: {id: 4, name: "ab"}

// unique(data, ['name', 'age']);
// 0: {id: 1, name: "a", age: 17}
// 1: {id: 6, name: "a", age: 18}
// 2: {id: 4, name: "ab"}
