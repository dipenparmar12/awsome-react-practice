/**
 *
 * @param {*} collection <Array || Object>
 * @param {*} searchKey
 * @returns
 * @Src: https://stackoverflow.com/a/58986651/8592918
 */
function findIn(collection, searchKey) {
  const arr =
    Object.prototype.toString.call(collection) === '[object Array]'
      ? collection
      : [collection]

  return arr.filter((obj) =>
    Object.keys(obj).some((key) => {
      if (typeof obj[key] === 'string') {
        return obj[key]?.toLowerCase?.().includes(searchKey?.toLowerCase?.())
      }
      if (typeof obj[key] === 'number') {
        return `${obj[key]}`
          ?.toLowerCase?.()
          .includes(searchKey?.toLowerCase?.())
      }
    }),
  )
}

export default findIn

// js search within object vlaues
// JS search in object values

// const testCollection = [
//   {
//     id: 1,
//     name: '1 1ONt',
//   },
//   {
//     id: 2,
//     name: '2 2 TWO',
//   },
//   {
//     id: 3,
//     name: '3 4 1THREE',
//   },
//   {
//     id: 4,
//     name: 45678,
//   },
//   {
//     id: '-',
//     name: 'Number 1234567890',
//   },
//   {
//     id: '#',
//     name: 'ZZZZZZZ',
//   },
// ]
// findIn(testCollection, 'ZZZZ')
// findIn(testCollection, '5678')
// findIn(testCollection, '1THREE')
// findIn(testCollection, 'EMPTY')

// const testObj = {
//   id: 'id',
//   name: 'name',
//   one: 1,
//   two: 22,
//   three: 333,
//   fourFive: 456,
//   number: 1234567890,
// }
