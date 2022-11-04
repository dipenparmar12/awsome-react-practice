/* eslint-disable no-param-reassign */
/**
 *
 * @param {*} obj
 * @param {*} vals
 * @returns {*} obj
 */
function omitVal(obj, vals, ...args) {
  const newObj = {}
  Array.isArray(vals) || (vals = [vals])
  if (args) vals.splice(vals.length, 0, ...args)

  Object.keys(obj || {}).forEach((prop) => {
    if (!vals.includes(obj[prop])) {
      newObj[prop] = obj[prop]
    }
  })
  return newObj
}

// var testObj = {
//   unde: undefined,
//   empty: '',
//   null: null,
//   nil: null,
//   fal: false,
//   tr: true,
//   id: 'id1',
//   name: 'name2',
//   one: 1,
//   date: '2021-12-20',
// }

// omitVal(testObj, null) // Remove null values
// omitVal(testObj, null, undefined) // Remove null and undefined vals

export default omitVal

/*

// omitVal(testObj, null, undefined, '')
// fal: false, tr: true, id: 'id1', name: 'name2', one: 1,}

// omitVal(testObj, null, undefined, '', false)
// {tr: true, id: 'id1', name: 'name2', one: 1, date: '2021-12-20'}

// omitVal(testObj, null, undefined, '', false, true)
// {id: 'id1', name: 'name2', one: 1, date: '2021-12-20'}

// omitVal(testObj, [null, undefined, '', false, true])
// {id: 'id1', name: 'name2', one: 1, date: '2021-12-20'}date: "2021-12-20"id: "id1"name: "name2"one: 1[[Prototype]]: Object

// omitVal(testObj, [null, undefined, '', false, true], 1, 'id1')
// {name: 'name2', date: '2021-12-20'}

*/
