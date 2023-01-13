/**
 *
 * @param {Object} obj
 * @returns {Object} obj
 */
function clearNullEmpties(obj) {
  let newObj = {}

  Object.entries(obj).forEach(([k, val], i) => {
    const isNotNull = val !== null
    const isObject = isNotNull && val.constructor === Object
    const isEmptyObj = isObject && Object.keys(val).length === 0

    /* call twice in case the result returned is iteslf an empty object,
    as with e in the Example Data */
    const result =
      isObject && !isEmptyObj && clearNullEmpties(clearNullEmpties(val))

    if (isObject) {
      result && Object.assign(newObj, { [k]: result })
    } else {
      Object.assign(newObj, { [k]: val })
    }
  })

  return newObj
}

export default clearNullEmpties

// // Example Data
// let object = {
//   a: {
//     b: 1,
//     c: {
//       a: 1,
//       d: {},
//       e: {
//         f: {},
//       },
//     },
//   },
//   b: {},
// }

// let expectedResult = {
//   a: {
//     b: 1,
//     c: {
//       a: 1,
//     },
//   },
// }

// console.log('result', clearNullEmpties(object))
// console.log('expected', expectedResult)

// let obj = {
//   one: 'One',
//   test: 0,
//   three: null,
//   clear: {},
//   bt: false,
//   bool: true,
//   two: undefined,
//   a: 'a',
//   nest: {
//     str: 'this is node',
//     emp: {},
//     t: undefined,
//     b: {
//       c: undefined,
//       d: 'thing',
//     },
//   },
// }
// obj = {
//   one: 'One',
//   test: 0,
//   _null: null,
//   _clear: {},
//   bt: false,
//   bool: true,
//   a: 'a',
//   nest: {
//     str: 'this is node',
//     _temp: {},
//     nest2: {
//       a: { a_: 1 },
//       b: {},
//     },
//   },
// }

// obj = JSON.parse(JSON.stringify(obj))

// console.log(obj)
// console.log('====================')
// console.log(clearNullEmpties(obj))

// const empty =
//   Symbol("empty")

// function removeEmpties (t)
// { switch (t?.constructor)
//   { case Array:
//     case Object:
//       return filter(map(t, removeEmpties), nonEmpty)
//     default:
//       return nonEmpty(t) ? t : empty
//   }
// }

// function nonEmpty (t)
// { switch (t?.constructor)
//   { case Array:
//       return t.length > 0
//     case Object:
//       return Object.keys(t).length > 0
//   //case String:             // <- define any empty types you want
//   //  return t.length > 0
//     default:
//       return t !== empty // <- all other t are OK, except for sentinel
//   }
// }

// function map (t, f)
// { switch (t?.constructor)
//   { case Array:
//       return t.map(f)
//     case Object:
//       return Object.fromEntries(Object.entries(t).map(([k, v]) =>  [k, f(v, k)]))
//     default:
//       return t
//   }
// }

// function filter (t, f)
// { switch (t?.constructor)
//   { case Array:
//       return t.filter(f)
//     case Object:
//       return Object.fromEntries(Object.entries(t).filter(([k, v]) =>  f(v, k)))
//     default:
//       return t
//   }
// }

// const input =
//   {a: {b: 1, c: {a: 1, d: {}, e: {f: {}}}}, b: {}}

// console.log(removeEmpties(input))

// If you don't want to include null or undefined -

// function nonEmpty (t)
// { switch (t?.constructor)
//   { case Array:
//       // ...
//     case Object:
//       // ...
//     default:
//       return t != null && !== empty // <-
//   }
// }

// If you don't want to include empty strings, numbers, or false booleans -

// function nonEmpty (t)
// { switch (t?.constructor)
//   { case Array:
//       // ...
//     case Object:
//       // ...
//     case String:
//       return t.length > 0  // <-
//     case Number:
//       return t != 0        // <-
//     case Boolean:
//       return !t            // <-
//     default:
//       // ...
//   }
// }
