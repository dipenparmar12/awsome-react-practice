console.clear()
console.log('Time:', new Date())


/*

export default Button              -> import Button from './button'
                                      const Button = require('./button').default
         
export const Button                -> import { Button } from './button'
                                      const { Button } = require('./button')
         
export { Button }                  -> import { Button } from './button'
                                      const { Button } = require('./button')
         
module.exports.Button              -> import { Button } from './button'
                                      const { Button } = require('./button')

module.exports.Button = Button     -> import { Button } from './button'
                                      const { Button } = require('./button')

module.exports = Button            -> import * as Button from './button'
                                      const Button = require('./button')

*/

////--------------------------
//// use strict
////--------------------------
//// - Only user defined declared variables are allowed,
//// - Without var, let, const declared variablesa are not allowed

// un_declared = 'not allowed' // without var, let, const
// var declared_var_allowed = 'use strict mode'

////--------------------------
//// can be used in scoped (block scoped allowed)
// // Throws error
// let on_strict_mode_inside = () => {
//   'use strict'
//   undeclared_var = 'this throws error'
//   lo(undeclared_var)
// }
// on_strict_mode_inside()

// /// No error
// let off_strict_mode_inside = () => {
//   undeclared_var = 'no error'
//   lo(undeclared_var)
// }
// off_strict_mode_inside()

////--------------------------
///// prevent uses of futurestic reserved words (upcoming reserved words). (ex. let) ecma-6
// let = 'it workds'
// console.log(let)

// function test() {
//   'use strict'
//   let = 'not work'
//   console.log(let)
// }

////--------------------------
//// you can not delete funcations and arguments, and variables
//// Error:: Delete of an unqualified identifier in strict mode error
// function this_was_deleted(args_to) {
//   delete args_to
// }
// delete this_was_deleted

////--------------------------
//// parameter pass by value or reference ?
////--------------------------
//// - primitive types are passed by value
//// - object type are passed by reference

// let _string = 'i am string'
// let _boolean = true || false
// let _number = 12 || 12.12
// let _symbol = Symbol("some_value")
//// ///console.log(_string, _boolean, _number, _symbol)

////--------------------------
//////// primitive values not changed in outside of fun
// let _a = 'old_value'
// console.log('outside_fun::', _a) // "old_value"

// function primitive_passed_by_value(_a) {
//   _a = 'new_value'
//   console.log('inside_fun::', _a) // new_value
// }

// primitive_passed_by_value(_a)
// console.log('outside_fun::', _a) // "old_value"

// //////// object changed in outside of fun
// let _b = { item: 100 }
// console.log('outside_fun::', _b) // 100
// function obj_passed_by_ref(_b) {
//   _b.item = 500
//   console.log('inside_fun::', _b) // 500
// }
// obj_passed_by_ref(_b)
// console.log('outside_fun::', _b) // 500

////--------------------------
////
////--------------------------

/////////////////
////--------CoreJS
// alert('hello JS')
// confirm('Are you Ready ?') // true/false
// prompt('what is your best strenth ?') // input
// document.write('DOC EDITED BY JS')

/////////////////
////-------- SomeDefinations
// Loops – Most programming languages allow to work with loops, which help in executing one or more statements up to a desired number of times. Find the "for" and "while" loop syntax in this section.
// If - Else statements – Conditional statements are used to perform different actions based on different conditions.
// Variables – Use variables (numbers, strings, arrays etc.) and learn the operators.
// Data types – You can declare many types of variables and declare your own objects in JavaScript.
// Strings – Learn how to work with JS strings and find the most common functions to work with this data type.
// Events – Use JavaScript event listeners to trigger functions.
// Numbers and math – Work with JS numbers, predefined constants and perform math functions.
// Dates – Get or modify current time and date.
// Arrays – Learn how to organize your vairables in vectors and how to use them.
// Global functions – Predefined functions that are built in every browser that supports JS.
// Regular expressions – Use RegEx to define a search pattern.
// Errors – JS error handling.
// JSON – JavaScript Object Notation is syntax used for storing and exchanging data.
// Promises – The Promise object is used for asynchronous computation. See our example on how to declare one.

/////////////////
////-------- DataType (primitive & obj)
/// Primitite: a primitive (primitive value, primitive data type) is data that is not an object and has no methods.
//  There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.
//  A primitive can be replaced, but it can't be directly altered.
//  The wrapper's valueOf() method returns the primitive value.

// Example
/// Using a string method doesn't mutate the string
var bar = 'baz'
console.log(bar) // baz
bar.toUpperCase()
console.log(bar) // baz

// Using an array method mutates the array
var foo = []
console.log(foo) // []
foo.push('plugh')
console.log(foo) // ["plugh"]

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase() // BAZ
// All primitives are immutable, i.e., they cannot be altered.
// It is important not to confuse a primitive itself with a variable assigned a primitive value.
// The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

/////////////////
////-------- DataType (yes Right)
let iAMVariable // undefined

let numbers = {
  18: 18,
  3.14: 3.14,
  '0b101010': 0b101010, // Binary Value
  '0xf6': 0xf6, //
  NaN: NaN,
} // Object
// console.log('js Numbers:\n', numbers)

let special_dataType = {
  undefined: undefined,
  null: null,
  infiity: 'infiity',
}
// console.log('Special DataTypes:\n',special_dataType);

/////////////////
////--------Arithmetic (Wow!)

let obj = {
  name: 'Arithmetic',
}
let a = 1,
  b = 2,
  c

let arithmetic = {
  'typeof 12': typeof 12,
  'typeof obj': typeof obj,
  '2 * (2 + 4)': 2 * (2 + 4),
  'obj.name': obj.name, // Obj Member
  'obj[name]': obj['name'], // Obj Member
  'a || b)': a || b, // logical A or B
  'c || b)': c || b, // logical C or B
  'a && b)': a || b, // logical a And b
  'c && b)': c || b, // logical c And b
  '!(a == b)': a == b, // logical NOT
  'a == b': a == b, // Equal
  'a != b': a != b, // Not Equal
  'a = b': (a = b), // assignment
  'a === b': a === b, // strict Equal (type & value)
}
// console.log('Arithmetic:\n', arithmetic);

/////////////////
////--------Sorthands (Roking)
let x1 = {} // new object
let x2 = '' // new primitive string
let x3 = 100 // new primitive number
let x4 = true // new primitive boolean
let x5 = [] // new array object
let x6 = /[a-b]/ // new RegExp object
let x7 = function () {} // new function object
x7 = () => {} // new function object arrove fun

/////////////////
////--------Arithmetic Some Rules (Have fun)
// console.log(5 + 7)      // 12,  typeof x is a number
// console.log(5 + "7")    // 57,  typeof x is a string
// console.log("5" + 7)    // 57,  typeof x is a string
// console.log(5 - 7)      // -2,  typeof x is a number
// console.log(5 - "7")    // -2,  typeof x is a number
// console.log("5" - 7)    // -2,  typeof x is a number
// console.log(5 - "x")    // NaN, typeof x is a number

// console.log(0 == "")     // true
// console.log(1 == "1")    // true
// console.log(1 == true)   // true

// console.log(0 === "")    // false
// console.log(1 === "1")   // false
// console.log(1 === true)  // false

// typeof null                   // Returns object
// typeof NaN                    // Returns number
// typeof function () {}         // Returns function
// typeof myCar                  // Returns undefined (if myCar is not declared)
// typeof "John"                 // Returns string
// typeof 3.14                   // Returns number
// typeof false                  // Returns boolean
// typeof [1, 2, 3, 4]           // Returns object
// typeof {name:'John', age:34}  // Returns object
// typeof new Date()             // Returns object
// -------------------------------------------
// The data type of NaN is number
// The data type of an array is object
// The data type of a date is object
// The data type of null is object
// The data type of an undefined variable is undefined

/////////////////
////--------Math (Lets Rock)

let math = {
  'Math.PI': Math.PI,
  'Math.round(.99)': Math.round(0.99), // rounded to its nearest integer:
  'Math.pow(10,3)': Math.pow(10, 3), // 10 Power of 3 || (10*10*10)
  'Math.sqrt(16)': Math.sqrt(16), // square root of 16 == (4*4)
  'Math.abs(-12)': Math.abs(-12), // absolute (positive) value of -12
  'Math.ceil(4.1)': Math.ceil(4.1), // rounded up to its nearest integer
  'Math.floor(4.9)': Math.floor(4.9), // rounded down to its nearest integer

  'Math.random()': Math.random(),
  'Math.max(0,3,6,8,2,5)': Math.max(0, 3, 6, 8, 2, 5), // highest value in a list
  'Math.min(10,3,6,8,4,5)': Math.min(10, 3, 6, 8, 4, 5), // highest value in a list
}
// console.log('Math:\n', math)

// abs(x)                 Returns the absolute value of x
// ceil(x)                Returns the value of x rounded up to its nearest integer
// cos(x)                 Returns the cosine of x (x is in radians)
// floor(x)               Returns the value of x rounded down to its nearest integer
// log(x)                 Returns the natural logarithm (base E) of x
// max(x, y, z, ..., n)   Returns the number with the highest value
// min(x, y, z, ..., n)   Returns the number with the lowest value
// pow(x, y)              Returns the value of x to the power of y
// random()               Returns a random number between 0 and 1
// round(x)               Returns the value of x rounded to its nearest integer

/////////////////
////-------- String (Great methods)
let abc = ',This is My String!'
let str = 'helLo world'
let string = {
  abc: abc,
  str: str,
  'str.length': str.length, // String len
  'str.toUpperCase()': str.toUpperCase(), // String len
  'str.toLowerCase()': str.toLowerCase(), // String len
  'str.indexOf("e")': str.indexOf('e'), // -1 if doesnt contain
  'str.indexOf("ll")': str.indexOf('ll'), // first occurence (index) from left to right
  'str.lastIndexOf("l")': str.lastIndexOf('l'), // first occurence (index) from right to left
  'str.charAt(3)': str.charAt(3), // return char specified index
  'str.charCodeAt(3)': str.charCodeAt(3), // return Unicode of specified index (a = 64)
  'str.concat(abc)': str.concat(abc), // str1 + str2
  'str.endsWith("rld")': str.endsWith('rld'), // true
  'str.endsWith("xyx")': str.endsWith('xyx'), // false
  'str.includes("wor")': str.includes('wor'), // true
  'str.includes("worr")': str.includes('worr'), // false
  '"abc,".repeat(3)': 'abc,'.repeat(3), // Retpeat String again &again as per specified times
  'str.replace("elLo","hii")': str.replace('elLo', 'hii'), //
  'str.search("wor")': str.search('wor'), //
  'str.search([/d$/i])': str.search(/ld$/i), // search is more powerfull then indexof bcz we can use RegExp inside

  'str.slice(7)': str.slice(7), // string.slice(start, end = remaining_str) || Extracts a part of a string
  'str.slice(1, 5)': str.slice(1, 5), // string.slice(start, end) || part of a string from start to str_length
  'str.slice(1, -1)': str.slice(1, -1), // string.slice(start, end) || neg vals starts from end of string (reverce)
  'str.substr(2,3)': str.substr(2, 3), // string.substr(start, length) return sub part of string
  'str.split(" ")': str.split(' '), // make array from string,elements split by specified vals
  // // 'str.substring(1,7)': str.substring(1,7),                        //
  'str.trim()': str.trim(), // Removes spaces from both ends
  'str.valueOf()': str.valueOf(), // Returns primitive val
}
// console.log('String:\n', string)

var myString = 'abcdefghijklmnopqrstuvwxyz'
var esc = "I don't \n know" // \n new line
var len = abc.length // string length
let string2 = {
  'myString.indexOf("lmno")': myString.indexOf('lmno'), // find substring, -1 if doesn't contain
  'myString.lastIndexOf("lmno")': myString.lastIndexOf('lmno'), // last occurance
  'myString.slice(3, 6)': myString.slice(3, 6), // cuts out "def", negative values count from behind
  'myString.replace("abc","123")': myString.replace('abc', '123'), // find and replace, takes regular expressions
  'myString.toUpperCase()': myString.toUpperCase(), // convert to upper case
  'myString.toLowerCase()': myString.toLowerCase(), // convert to lower case
  'myString.concat(" ", esc)': myString.concat(' ', esc), // abc + " " + str2
  'myString.charAt(2)': myString.charAt(2), // character at index: "c"
  'myString.charCodeAt(2)': myString.charCodeAt(2), // character code at index: "c" -> 99
  'myString.split(",")': myString.split(','), // splitting a string on commas gives an array
  // 'myString.split("")': myString.split(""),                  // splitting on characters
  'myString[2]': myString[2], // unsafe, abc[2] = "C" doesn't work
}
// console.log('String2:\n', string2)

/////////////////
////-------- in Operator (Awsomeness is Activated)

let news = ['indianTimes', 'sandes', 'economicsTimes']
let myObj = { name: 'dipends', age: 24, lang: 'Js' }

let in_Operator = {
  '"sandes" in news': 'sandes' in news,
  '0 in news': 0 in news, // true
  '1 in news': 1 in news, // Returns false (does not exist)
  '4 in news': 4 in news, // false
  'length in news': 'length' in news, // false
  'name in myObj': 'name' in myObj, // true
  'age in myObj': 'age' in myObj, // true
  'book in myObj': 'book' in myObj, // false

  // CORE JS objects
  '"PI" in Math': 'PI' in Math, // Returns true
  '"NaN" in Number': 'NaN' in Number, // Returns true
  '"length" in String': 'length' in String, // Returns true
}
// console.log('in_Operator:\n', in_Operator)

/////////////////
////--------Array (Joy is Here, right now, right )

createdArrayFrom = Array.from('ABCDE')
console.log(createdArrayFrom)

let lifeArray = new Array('joy', 'love', 'happiness', 'enjoyment')
let lifeArray2 = ['BeingWise', 'Power', 'Hope']

// console.log(lifeArray)

isArray = Array.isArray(lifeArray) // true | false
// console.log(isArray)

length_of_arr = lifeArray.length // number of Element (len)
// console.log('Array length:', length_of_arr)

array_length_new = lifeArray.unshift('1st_element') // add new element at index 0 || returns the new length
// console.log(array_length_new)

removed_element = lifeArray.shift() // remove 1st element returns removed element
// console.log(removed_element)

array_length_new = lifeArray.push('Friends') // add new element to end of arr
// console.log('after push returns arr new length:',array_length_new)

removed_element = lifeArray.pop() // remove last element, returns that element
// console.log('Removed last Eleement by .pop():',removed_element)

lifeArray = lifeArray.concat(lifeArray2, ['Delightful', 'Peace', 'Power']) // join Two or more arrays
// console.log(lifeArray)

lifeArray.sort() // Sort ascending
lifeArray.reverse() // Reverse A-Z to Z-A
console.log(lifeArray)

isIncludes_val = lifeArray.includes('love') // true | false
// console.log('is_includes_specified_val: ', isIncludes_val); // true

indexOf_my_val = lifeArray.indexOf('Power') // caseSensitive || if not ele not available returns -1
last_indexOf_my_val = lifeArray.lastIndexOf('Power') // find index from end
// console.log(indexOf_my_val)
// console.log(last_indexOf_my_val)

part_of_lifeArray = lifeArray.slice(1, 4) // a.slice(start_position, end_position)  returns part of array || end_position excluded
// console.log(part_of_lifeArray)

part_of_lifeArray = lifeArray.splice(1, 4) // a.slice(start_position, number_of_element)  returns part of array
// console.log(part_of_lifeArray)

arrJoined_str = lifeArray.join('@,') // Returns String
// console.log(arrJoined_str);

lifeArray = arrJoined_str.split('@,')
// console.log(lifeArray);

lifeArray_str = lifeArray.toLocaleString()
// console.log(lifeArray_str)

// for( let index_val of lifeArray.entries()){
//     cl(`${index_val[0]}:${index_val[1]}`)
// }

lifeArray_keys = lifeArray.keys()
lifeArray_val = lifeArray.values()
lifeArray_elements = lifeArray.entries()

// // 1st Element of Array
console.log(lifeArray_keys.next().value)
console.log(lifeArray_val.next().value)
console.log(lifeArray_elements.next().value)

// // 2nd Element of Array... and So on....
console.log(lifeArray_keys.next().value)
console.log(lifeArray_val.next().value)
console.log(lifeArray_elements.next().value)

// ----------------
// ----- Or you can try direct loop insted of next()..
for (let keys of lifeArray.keys()) {
  console.log(keys)
}
for (let values of lifeArray.values()) {
  console.log(values)
}
for (let [key, val] of lifeArray.entries()) {
  console.log(key, val)
}

Iam_hope = lifeArray.find((val) => {
  if (val == 'Hope') {
    return true
  }
})
console.log(Iam_hope)

lifeArray_has_atleast_something = lifeArray.some((val) => {
  if (val == 'Hope') {
    return true
  }
})
console.log(lifeArray_has_atleast_something)

lifeArray_mustHave = lifeArray.some((val) => {
  if (val.includes('')) {
    return true
  }
})
console.log(lifeArray_mustHave)

lifeArrayModified_every_element = lifeArray.map(
  (value, index, array) => '_' + value
)
console.log(lifeArrayModified_every_element)

///////////////
//////// MAP (let's see)
let users = new Map()

users.set('dipen', { name: 'dipends', age: 24 })
users.set('hitesh', { name: 'iHites', age: 25 })
users.set('janvi', { name: 'iJanu', age: 22 })

let total_users = users.size // 3

let isDipen_userExisted = users.has('dipen') // true

let janviFrom_users = users.get('janvi') // return janvi instance (pass key)
let janviAge = janviFrom_users.age //  22
console.log(janviFrom_users) //  {name: "iJanu", age: 22}
let notFound = users.get('notInThere') // undefined

let isUser_deleted = users.delete('janvi') // returns true (true|false)
let isUser_exist = users.has('janvi') // false, janvi has been removed

let userKeys = users.keys()
for (const userKey of userKeys) {
  console.log(userKey) // dipen, hitesh, janvi
}

for (const user of users.values()) {
  console.log(user.name + ':', user) // dipends: {name: "dipends", age: 24}
}

for (const [key, value] of users.entries()) {
  console.log(key) // dipen, hitesh, janvi
  console.log(value) // users Object
}

// users.forEach((v, k) => console.log(k, v)); // hitesh {name: "iHites", age: 25}

let numArr = [
  ['one', { name: 'ONE!', num: 1 }],
  ['two', 2],
  ['three', 3],
]
let numMap = new Map(numArr)
let two = numMap.get('two')

console.log(two) // 2
console.log(numMap.get('one').name) // ONE!

let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])
let second = new Map([
  [1, 'one.0'],
  [4, 'four'],
])

// merge Two maps
let concated_maps = new Map([...first, ...second])
console.log(concated_maps)

///////////////
////// SET
/// Set same as map the only Diff is Set stors only unique values

// intersect can be simulated via
// var intersection = new Set([...set1].filter(x => set2.has(x)));

// difference can be simulated via
// var difference = new Set([...set1].filter(x => !set2.has(x)));

////////////
///Implementing basic set operations
function isSuperset(set, subset) {
  for (var elem of subset) {
    if (!set.has(elem)) {
      return false
    }
  }
  return true
}

function union(setA, setB) {
  var _union = new Set(setA)
  for (var elem of setB) {
    _union.add(elem)
  }
  return _union
}

function intersection(setA, setB) {
  var _intersection = new Set()
  for (var elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem)
    }
  }
  return _intersection
}

function difference(setA, setB) {
  var _difference = new Set(setA)
  for (var elem of setB) {
    _difference.delete(elem)
  }
  return _difference
}

//Examples
var setA = new Set([1, 2, 3, 4]),
  setB = new Set([2, 3]),
  setC = new Set([3, 4, 5, 6])

// isSuperset(setA, setB) // => true
// union(setA, setC) // => Set [1, 2, 3, 4, 5, 6]
// intersection(setA, setC) // => Set [3, 4]
// difference(setA, setC) // => Set [1, 2]

////////////
/// null || undefined
typeof null // "object" (not "null" for legacy reasons)
typeof undefined // "undefined"
null === undefined // false
null == undefined // true
null === null // true
null == null // true
!null // true
isNaN(1 + null) // false
isNaN(1 + undefined) // true




////--------------------------
//// asynchronous
////--------------------------
//// Node asynchronous in nature(through event loops). 
//  To handle asynchronouse behaviour explicily, 

// asynchronouse behaviour 
const getUser = (id) => setTimeOut(() => "User:${id}", 200)
console.log("starts")
console.log(getUser(100)) /// undefined
console.log("End")
//// in above example execution never stops,holds block or wait for computation of statments


//// To prevent asynchronouse behaviour or above (write Synchronouse execution)
//// We have 3 petterns to deal with asynchroouse,in Nodejs
//// Callbacks, Promises, and async/await=>(sentetic sugar in front of Promises)

///// #1 callbacks
const getUser = (id, cb) => setTimeOut(() => cb("User:${id}"), 200)
console.log("starts")
console.log(getUser(100, (data)=>{
	console.log("do someting with callbacks", data)
	getRepos(()=>{
		()=>() // Callback hell (this is why Promises introduced)
	})
	return data
})) /// User:ID
console.log("End")

///// #2 Promises
//// Will give you result of asynchronouse, (resolved, rejected) (returns thenable objects)
//// 
//// Pending State, ()=> when we create promises, new Promise((resolve,reject)=> resoleve(data) or reject(err/data))
//// .then() for dealding with further opration,
//// .catch() for dealding any error, one point to stop for all nested errors, callback are very ugly & unreliable in this situations 
//// We can make chain of oprations,


//// We can direct resolve a result or direct reject
//// Promise.resolve({data:123}) 
//// Promise.reject(new Error("wentWrong")) 

//// To run a paralles promises 
//// Promise.all([10,20,30]).then(oneByOne=> console.log(oneByOne))

// ///
// // Callback-based approach
// // getUser(1, (user) => {
// //   getRepositories(user.gitHubUsername, (repos) => {
// //     getCommits(repos[0], (commits) => {
// //       console.log(commits);
// //     })
// //   })
// // });


// // Promise-based approach
// // getUser(1)
// //   .then(user => getPosts(user.gitHubUsername))
// //   .then(repos => getCommits(repos[0]))
// //   .then(commits => console.log('Commits', commits))
// //   .catch(err => console.log('Error', err.message));


// // function getUser(id) {
// //   return new Promise((resolve, reject) => {
// //     // Kick off some async work 
// //     setTimeout(() => {
// //       console.log('Reading a user from a database...');
// //       resolve({ id: id, gitHubUsername: 'mosh' });
// //     }, 2000);
// //   });
// // }

// // function getPosts(username) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log('Calling GitHub API...');
// //       resolve(['repo1', 'repo2', 'repo3']);
// //     }, 2000);  
// //   });
// // }

// // function getCommits(repo) {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       console.log('Calling GitHub API...');
// //       resolve(['commit']);
// //     }, 2000);
// //   });
// // }

// // Promise-based approach ( nice to have try catch block for all in 1 error catch)
// try{
//   const user = await getUser(1)
//   const posts = await getPosts(user.id)
//   const comments = await getcomments(posts[0])
// }catch(e){
//   console.log("one of following promise returns erro, rejected promise", e)
// }


////--------------------------
//// Promises
////--------------------------
//// The Promise object is used for deferred and asynchronous computations. 
//// A Promise represents an operation that hasn't completed yet but is expected in the future.

// /
// /// Example 
// // function stats (file) {
// //   return new Promise((resolve, reject) => {
// //     fs.stat(file, (err, data) => {
// //       if (err) {
// //         return reject (err)
// //       }
// //       resolve(data)
// //     })
// //   })
// // }

// /
// // Promise.all([
// //   stats('file1'),
// //   stats('file2'),
// //   stats('file3')
// // ])
// // .then((data) => console.log(data))
// // .catch((err) => console.log(err))


////--------------------------
//// async & await
////--------------------------
/* Notes:
	1. written like synchronous code
    2. compatible with try/catch blocks
    3. avoids chaining .then statements
    4. async functions always return a promise
    5. function pauses on each await expression
    6. A non promise value is converted to 
       Promise.resolve(value) and then resolved
*/

// Syntax
// Function Declaration
async function myFunction(){
  await ... // some code goes here
}
  
// Arrow Declaration
const myFunction2 = async () => {
  await ... // some code goes here
}
  
 // OBJECT METHODS

const obj = {
	async getName() {
		return fetch('https://www.example.com');
	}
}

// IN A CLASS

class Obj {
	// getters and setter CANNOT be async
	async getResource {
		return fetch('https://www.example.com');
	}
}
  
