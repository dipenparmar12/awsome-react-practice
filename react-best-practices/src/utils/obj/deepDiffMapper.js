/*
 * Compare two items/objects
 * Src: https://stackoverflow.com/a/8596559/8592918
 * */
const deepDiffMapper = (function () {
  return {
    VALUE_CREATED: 'created',
    VALUE_UPDATED: 'updated',
    VALUE_DELETED: 'deleted',
    VALUE_UNCHANGED: 'unchanged',
    map: function (obj1, obj2) {
      if (this.isFunction(obj1) || this.isFunction(obj2)) {
        throw 'Invalid argument. Function given, object expected.'
      }
      if (this.isValue(obj1) || this.isValue(obj2)) {
        return {
          type: this.compareValues(obj1, obj2),
          data: obj1 === undefined ? obj2 : obj1,
        }
      }

      var diff = {}
      for (var key in obj1) {
        if (this.isFunction(obj1[key])) {
          continue
        }

        var value2 = undefined
        if (obj2[key] !== undefined) {
          value2 = obj2[key]
        }

        diff[key] = this.map(obj1[key], value2)
      }
      for (var key in obj2) {
        if (this.isFunction(obj2[key]) || diff[key] !== undefined) {
          continue
        }

        diff[key] = this.map(undefined, obj2[key])
      }

      return diff
    },
    compareValues: function (value1, value2) {
      if (value1 === value2) {
        return this.VALUE_UNCHANGED
      }
      if (
        this.isDate(value1) &&
        this.isDate(value2) &&
        value1.getTime() === value2.getTime()
      ) {
        return this.VALUE_UNCHANGED
      }
      if (value1 === undefined) {
        return this.VALUE_CREATED
      }
      if (value2 === undefined) {
        return this.VALUE_DELETED
      }
      return this.VALUE_UPDATED
    },
    isFunction: function (x) {
      return Object.prototype.toString.call(x) === '[object Function]'
    },
    isArray: function (x) {
      return Object.prototype.toString.call(x) === '[object Array]'
    },
    isDate: function (x) {
      return Object.prototype.toString.call(x) === '[object Date]'
    },
    isObject: function (x) {
      return Object.prototype.toString.call(x) === '[object Object]'
    },
    isValue: function (x) {
      return !this.isObject(x) && !this.isArray(x)
    },
  }
})()

export default deepDiffMapper
//
// var result = deepDiffMapper.map(
//   {
//     a: 'i am unchanged',
//     b: 'i am deleted',
//     e: {
//       a: 1,
//       b: false,
//       c: null,
//     },
//     f: [
//       1,
//       {
//         a: 'same',
//         b: [
//           {
//             a: 'same',
//           },
//           {
//             d: 'delete',
//           },
//         ],
//       },
//     ],
//     g: new Date('2017.11.25'),
//   },
//   {
//     a: 'i am unchanged',
//     c: 'i am created',
//     e: {
//       a: '1',
//       b: '',
//       d: 'created',
//     },
//     f: [
//       {
//         a: 'same',
//         b: [
//           {
//             a: 'same',
//           },
//           {
//             c: 'create',
//           },
//         ],
//       },
//       1,
//     ],
//     g: new Date('2017.11.25'),
//   },
// )
// console.log(result)

// /*!
//  * Find the differences between two objects and push to a new object
//  * (c) 2019 Chris Ferdinandi & Jascha Brinkmann, MIT License, https://gomakethings.com & https://twitter.com/jaschaio
//  * @param  {Object} obj1 The original object
//  * @param  {Object} obj2 The object to compare against it
//  * @return {Object}      An object of differences between the two
//  * @src: https://gomakethings.com/getting-the-differences-between-two-objects-with-vanilla-js/
//  */
// const compareObj = function (obj1, obj2) {
//   // Make sure an object to compare is provided
//   if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
//     return obj1
//   }
//
//   //
//   // Variables
//   //
//
//   var diffs = {}
//   var key
//
//   //
//   // Methods
//   //
//
//   /**
//    * Check if two arrays are equal
//    * @param  {Array}   arr1 The first array
//    * @param  {Array}   arr2 The second array
//    * @return {Boolean}      If true, both arrays are equal
//    */
//   var arraysMatch = function (arr1, arr2) {
//     // Check if the arrays are the same length
//     if (arr1.length !== arr2.length) return false
//
//     // Check if all items exist and are in the same order
//     for (var i = 0; i < arr1.length; i++) {
//       if (arr1[i] !== arr2[i]) return false
//     }
//
//     // Otherwise, return true
//     return true
//   }
//
//   /**
//    * Compare two items and push non-matches to object
//    * @param  {*}      item1 The first item
//    * @param  {*}      item2 The second item
//    * @param  {String} key   The key in our object
//    */
//   var compare = function (item1, item2, key) {
//     // Get the object type
//     var type1 = Object.prototype.toString.call(item1)
//     var type2 = Object.prototype.toString.call(item2)
//
//     // If type2 is undefined it has been removed
//     if (type2 === '[object Undefined]') {
//       diffs[key] = null
//       return
//     }
//
//     // If items are different types
//     if (type1 !== type2) {
//       diffs[key] = item2
//       return
//     }
//
//     // If an object, compare recursively
//     if (type1 === '[object Object]') {
//       var objDiff = compareObj(item1, item2)
//       if (Object.keys(objDiff).length > 0) {
//         diffs[key] = objDiff
//       }
//       return
//     }
//
//     // If an array, compare
//     if (type1 === '[object Array]') {
//       if (!arraysMatch(item1, item2)) {
//         diffs[key] = item2
//       }
//       return
//     }
//
//     // Else if it's a function, convert to a string and compare
//     // Otherwise, just compare
//     if (type1 === '[object Function]') {
//       if (item1.toString() !== item2.toString()) {
//         diffs[key] = item2
//       }
//     } else {
//       if (item1 !== item2) {
//         diffs[key] = item2
//       }
//     }
//   }
//
//   //
//   // Compare our objects
//   //
//
//   // Loop through the first object
//   for (key in obj1) {
//     if (obj1.hasOwnProperty(key)) {
//       compare(obj1[key], obj2[key], key)
//     }
//   }
//
//   // Loop through the second object and find missing items
//   for (key in obj2) {
//     if (obj2.hasOwnProperty(key)) {
//       if (!obj1[key] && obj1[key] !== obj2[key]) {
//         diffs[key] = obj2[key]
//       }
//     }
//   }
//
//   // Return the object of differences
//   return diffs
// }
//
// export default compareObj
//
// // var order1 = {
// //   sandwich: 'tuna',
// //   chips: true,
// //   drink: 'soda',
// //   order: 1,
// //   toppings: ['pickles', 'mayo', 'lettuce'],
// //   details: {
// //     name: 'Chris',
// //     phone: '555-555-5555',
// //     email: 'no@thankyou.com',
// //   },
// //   otherVal1: '1',
// // }
// //
// // var order2 = {
// //   sandwich: 'turkey',
// //   chips: true,
// //   drink: 'soda',
// //   order: 2,
// //   toppings: ['pickles', 'lettuce'],
// //   details: {
// //     name: 'Jon',
// //     phone: '(555) 555-5555',
// //     email: 'yes@please.com',
// //   },
// //   otherVal2: '2',
// // }
// //
// // console.log(compareObj(order1, order2))
