function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export default uuid

// export function uuid2() {
//   // console.log("uuid.js::");
//   let S4 = function () {
//     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
//   }
//   return (
//     S4() +
//     S4() +
//     '-' +
//     S4() +
//     '-' +
//     S4() +
//     '-' +
//     S4() +
//     '-' +
//     S4() +
//     S4() +
//     S4()
//   )
// }

// export function genId(len = 8) {
//   let id = ''
//   do {
//     id += Math.random().toString(36).substr(2)
//   } while (id.length < len)
//   return id.substr(0, len)
// }
// // import { genId } from "utils/uuid";

// // This code generates unique userid for everyuser.
// export function getUniqueID() {
//   const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
//     .toString(16)
//     .substring(1)
//   return s4() + s4() + '-' + s4()
// }
