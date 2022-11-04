/* eslint-disable */
/**
 * Query String builder from object or nested objects.
 * @param {Object} initialObj
 * @return {String}
 * @src https://stackoverflow.com/a/66330140
 */
function queryEncoder(initialObj = {}) {
  if (!initialObj) return ''
  const reducer =
    (obj, parentPrefix = null) =>
    (prev, key) => {
      const val = obj[key]
      key = encodeURIComponent(key)
      const prefix = parentPrefix ? `${parentPrefix}[${key}]` : key

      if (val === null || typeof val === 'function') {
        prev.push(`${prefix}=`)
        return prev
      }

      /// handle str,num, bool
      if (['string', 'number', 'boolean'].includes(typeof val)) {
        prev.push(`${prefix}=${encodeURIComponent(val)}`)
        return prev
      }

      /// handle Date Type (send TimeStamp
      if (typeof val === 'object' && val instanceof Date) {
        const onlyDate = val.toISOString().split('T')[0] // 2021-02-26

        // const onlyTime = val.toTimeString().split(' ')[0].replace(/:/g, ':')
        prev.push(`${prefix}=${encodeURIComponent(onlyDate)}`)
        return prev
      }

      prev.push(Object.keys(val).reduce(reducer(val, prefix), []).join('&'))
      return prev
    }

  return Object.keys(initialObj).reduce(reducer(initialObj), []).join('&')
}

export default queryEncoder

// const testCase1 = {
//   name: 'Full Name',
//   age: 30
// }
// const testCase2 = {
//   name: 'Full Name',
//   age: 30,
//   children: [
//     {name: 'Child foo'},
//     {name: 'Foo again'}
//   ],
//   wife: {
//     name: 'Very Difficult to say here'
//   }
// }
// console.log(queryEncoder(testCase1)); // name=Full%20Name&age=30
// console.log(queryEncoder(testCase2)); // name=Full%20Name&age=30&children[0][name]=Child%20foo&children[1][name]=Foo%20again&wife[name]=Very%20Difficult%20to%20say%20here
