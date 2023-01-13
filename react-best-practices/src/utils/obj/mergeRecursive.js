const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep Merge JavaScript Objects Merging Recursively
 * @param {Object} target
 * @param  {...Object} sources
 * @returns {Object}
 * @see https://thewebdev.info/2021/03/06/how-to-deep-merge-javascript-objects/
 * @example 
 * 
const merged = mergeRecursive(
  {
    a: 11,
    b: { bb: 11 },
    c: 11,
  },
  { b: { bbb: 222 }, c: 222 }
)
console.log(merged) 
// {
//   a: 11,
//   b: { bb: 11, bbb: 222 },
//   c: 222,
// }
 */
const mergeRecursive = (target, ...sources) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key])
          Object.assign(target, {
            [key]: {},
          })
        mergeRecursive(target[key], source[key])
      } else {
        Object.assign(target, {
          [key]: source[key],
        })
      }
    }
  }

  return mergeRecursive(target, ...sources)
}


export default mergeRecursive

// const merged = mergeRecursive(
//   {
//     a: 11,
//     b: { bb: 11 },
//     c: 11,
//   },
//   { b: { bbb: 222 }, c: 222 }
// )
// console.log(merged)

// const merged2 = mergeRecursive(
//   {
//     a: 1,
//     b: { bb: 11 },
//     c: 1,
//     d: {
//       d: {
//         d2: 123,
//       },
//     },
//   },
//   { d: { d: { d3: 333 } } }
// )
// console.log(merged2)



// const merged3 = mergeRecursive(
  // {
  //     a: '_aa',
  //     b : { ba: '_ba', bb:'bb', b3:{ bc: { bca:1 }} },
  //     c: { ca:'_ca', cb: '_cb' },
  //     e: 0,
  //     d: {}

  // },
  // {
  //     b: { bb: 'bb', b3:{ bc: { bcd: 1 }}},
  //     d: { da: 'da', db: 'db', },
  // },
  // {
  //     e: 123,
  //     f: 'newProp',
  //     g: 0,
  //     h: false,
  //     i: true,
  //     j: null,
  //     k: undefined,
  // }
// )
// console.log(merged3)
