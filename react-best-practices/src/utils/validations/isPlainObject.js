/**
 *
 * @param {*} obj
 * @example isPlainObject({}) // true
 * @example isPlainObject({a:1}) // true
 * @example isPlainObject({a:1, b:2}) // true
 * @example isPlainObject({a:()=>{}, b:null}) // true
 * @example isPlainObject({a:()=>{}})
 * @example isPlainObject([]) // false
 * @example isPlainObject(null) // false
 * @example isPlainObject(undefined) // false
 * @example isPlainObject(new Date()) // false
 * @example isPlainObject(1) // false
 * @example isPlainObject(2.1) // false
 * @example isPlainObject(/RegExp/) // false
 * @example isPlainObject(true) // false
 * @example isPlainObject(false) // false
 * @example isPlainObject(0) // false
 * @example isPlainObject(1) // false
 * @example isPlainObject("1") // false
 * @example isPlainObject("d")  // false
 */
function isPlainObject(obj) {
  return obj && typeof obj === 'object' && obj.constructor === Object
}

// console.log(`isPlainObject({}) // true`, isPlainObject({}))
// console.log(`isPlainObject({a:1}) // true`, isPlainObject({a:1}))
// console.log(`isPlainObject({a:1, b:2}) // true`, isPlainObject({a:1, b:2}))
// console.log(`isPlainObject({a:()=>{}, b:null}) // true`, isPlainObject({a:()=>{}, b:null}))
// console.log(`isPlainObject({a:()=>{}})`, isPlainObject() )
// console.log(`isPlainObject([]) // false`, isPlainObject([]))
// console.log(`isPlainObject(null) // false`, isPlainObject(null))
// console.log(`isPlainObject(undefined) // false`, isPlainObject(undefined))
// console.log(`isPlainObject(new Date()) // false`, isPlainObject(new Date()))
// console.log(`isPlainObject(1) // false`, isPlainObject(1))
// console.log(`isPlainObject(2.1) // false`, isPlainObject(2.1))
// console.log(`isPlainObject(/RegExp/) // false`, isPlainObject(/RegExp/))
// console.log(`isPlainObject(true) // false`, isPlainObject(true))
// console.log(`isPlainObject(false) // false`, isPlainObject(false))
// console.log(`isPlainObject(0) // false`, isPlainObject(0))
// console.log(`isPlainObject(1) // false`, isPlainObject(1))
// console.log(`isPlainObject("1") // false`, isPlainObject("1"))
// console.log(`isPlainObject("d")  // false`, isPlainObject("d") )
