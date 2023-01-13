/*
 * Type check
 * */
const Assertion = {
  isFunction(x) {
    return Object.prototype.toString.call(x) === '[object Function]'
  },
  isString(x) {
    return Object.prototype.toString.call(x) === '[object String]'
  },
  isArray(x) {
    return Object.prototype.toString.call(x) === '[object Array]'
  },
  isDate(x) {
    return Object.prototype.toString.call(x) === '[object Date]'
  },
  isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]'
    //  return typeof x === 'object' && x !== null && !Array.isArray(x)
  },
  isPlainObject(x) {
    return x && typeof x === 'object' && x.constructor === Object
  },
  // isPlainObject: function (x) {
  //   return (
  //     !!x &&
  //     typeof x === 'object' &&
  //     (x.__proto__ === null || x.__proto__ === Object.prototype)
  //   )
  // },
  isNull(x) {
    return Object.prototype.toString.call(x) === '[object Null]' || x === null
  },
  isRegExp(x) {
    return (
      //  x !== null &&
      //  x !== undefined &&
      Object.prototype.toString.call(x) === '[object RegExp]'
    )
  },
  isNumber(n) {
    return !Number.isNaN(parseFloat(n)) && Number.isFinite(n)
    // return (n) => /(^-?|^\+?|^\d?)\d*\.\d+$/.test(n + '')
  },
  isNumeric(x) {
    return x != null && x - parseFloat(x) + 1 >= 0
    // @src: https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts#L15
  },
  isNotNumber(x) {
    return typeof x !== 'number' || Number.isNaN(x) || !Number.isFinite(x)
  },
  isBool: function isBool(x) {
    return x !== null && x !== undefined && [true, false].includes(x)
  },
  isValue(x) {
    return !this.isObject(x) && !this.isArray(x)
  },
  isUndefined(x) {
    // return x === undefined
    return typeof x === 'undefined' || x === undefined
    // @src: https://github.com/chakra-ui/chakra-ui/blob/main/packages/utils/src/assertion.ts#L40
  },
  isEmptyObject(x) {
    return x !== null && !Object.entries(x).length
  },
  isEmpty(x) {
    return (
      [Object, Array].includes((x || {}).constructor) &&
      !Object.entries(x || {}).length
    )
  },
  isUrl(x) {
    // @src https://stackoverflow.com/a/5717133/8592918
    if (Object.prototype.toString.call(x) === '[object String]') {
      const pattern = new RegExp(
        '^(https?:\\/\\/)?' + // protocol
          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
          '(\\#[-a-z\\d_]*)?$',
        'i',
      ) // fragment locator
      return !!pattern.test(x)
    }
    return false
  },
}

export default Assertion

// const isFunction = (x) => x && (Object.prototype.toString.call(x) === "[object Function]" || "function" === typeof x || x instanceof Function);
// const isObject = (x) => typeof x === 'object' && x !== null && !Array.isArray(x)

/**
  isBool(true) // true
  isBool(false) // true
  isBool(1) // false
  isBool(0) // false
  isBool("") // false
  isBool(0.0) // false
  isBool("") // false
  isBool({}) // false
  isBool(null) // false
  isBool(undefined) // false
  isBool(/RegExp/) // false
  isBool(new Date()) // false
 */

/**
  isObject({}) // true
  isObject(null) // false
  isObject(undefined) // false
  isObject(new Date()) // false
  isObject(1) // false
  isObject(2.1) // false
  isObject(/RegExp/) // false
  isObject(true) // false
  isObject(false) // false
  isObject(0) // false
  isObject(1) // false
  isObject("1") // false
  isObject("d")  // false
*/

/**
isEmpty(null) //  true
isEmpty('') //  true
isEmpty({}) //  true
isEmpty([]) //  true
isEmpty({a: '1'}) //  false
*/

/*
isPlainObject(null); // false
isPlainObject('hello world'); // false
isPlainObject([]); // false
isPlainObject(Object.create(null)); // false
isPlainObject(function () {}); // false

isPlainObject({}); // true
isPlainObject({ a: '1', b: '2' }); // true



console.log(`isPlainObject({}) // true`, isPlainObject({})) 
console.log(`isPlainObject({a:1}) // true`, isPlainObject({a:1})) 
console.log(`isPlainObject({a:1, b:2}) // true`, isPlainObject({a:1, b:2})) 
console.log(`isPlainObject({a:()=>{}, b:null}) // true`, isPlainObject({a:()=>{}, b:null})) 
console.log(`isPlainObject({a:()=>{}})`, isPlainObject() )
console.log(`isPlainObject([]) // false`, isPlainObject([]))
console.log(`isPlainObject(null) // false`, isPlainObject(null)) 
console.log(`isPlainObject(undefined) // false`, isPlainObject(undefined)) 
console.log(`isPlainObject(new Date()) // false`, isPlainObject(new Date())) 
console.log(`isPlainObject(1) // false`, isPlainObject(1)) 
console.log(`isPlainObject(2.1) // false`, isPlainObject(2.1)) 
console.log(`isPlainObject(/RegExp/) // false`, isPlainObject(/RegExp/)) 
console.log(`isPlainObject(true) // false`, isPlainObject(true)) 
console.log(`isPlainObject(false) // false`, isPlainObject(false)) 
console.log(`isPlainObject(0) // false`, isPlainObject(0)) 
console.log(`isPlainObject(1) // false`, isPlainObject(1)) 
console.log(`isPlainObject("1") // false`, isPlainObject("1")) 
console.log(`isPlainObject("d")  // false`, isPlainObject("d") ) 

 */
