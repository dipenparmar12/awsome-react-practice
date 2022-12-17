/**
 *
 * @param {*} func
 * @src https://javascript.info/currying-partials
 * @example isFunctionAndCall((e)=> console.log(e))('curry function test..')
 * @example const add = (a, b) => a + b;
 * const add5 = add.bind(null, 5);
 * add5(2) // 7
 */
export default function isFunctionAndCall(func) {
  console.log('IsFunctionAndCall.js::[2] func', func)
  if (Object.prototype.toString.call(func) !== '[object Function]') {
    return () => false
  }

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args)
    }
    return function (...args2) {
      return curried.apply(this, args.concat(args2))
    }
  }
}
