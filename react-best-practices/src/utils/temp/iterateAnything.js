import React from 'react'

const iterateAnything = (input, includingString = false) => {
  // console.log("iterateAnything.js input::", input)

  /// checks for null and undefined
  if (input == null) return [input]

  if (input === false) return [input]
  if (input === 0) return [input]

  if (
    (includingString && typeof input == 'string') ||
    input instanceof String
  ) {
    /// TODO::STRING Iterate utility
    return [] // Temp
  }

  /// Iterate Object
  if (typeof input[Symbol.iterator] === 'function') return Object.entries(input)

  /// Iterate if input is array
  if (Array.isArray(input)) return input

  /// finally input is not iterable.
  return Object.entries(input)
}
export default iterateAnything

// iterateAnything({'one': [1, 2, 3], "tow": "two"}).map(([key, val]) => {
//   iterateAnything(val).map(([k, v]) => {
//     console.log("_ErrorBlock.js v::", k, v)
//   })
// })

//
// In up-to-date implementations of ES, you can use Object.entries:
//
// for (const [key, value] of Object.entries(obj)) { }
//
// or
//
// Object.entries(obj).forEach(([key, value]) => ...)
//
// If you just want to iterate over the values, then use Object.values:
//
// for (const value of Object.values(obj)) { }
//
// or
//
// Object.values(obj).forEach(value => ...)
