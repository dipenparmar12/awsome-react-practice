/**
 *
 * @param arrObj
 * @param key
 * @returns newArrObj
 * @src https://stackoverflow.com/a/68026186/8592918
 */
function omitDuplicates(arrObj, key) {
  const arr = []
  arrObj.reduce((acc, curr) => {
    if (acc.indexOf(curr[key]) === -1) {
      acc.push(curr[key])
      arr.push(curr)
    }
    return acc
  }, [])
  return arr
}

/** 
const arrObjs = [
  { name: 'name1', position: 'left' },
  { name: 'name2', position: 'right' },
  { name: 'name2', position: 'right2' },
  { name: 'name3', position: 'left' },
  { name: 'name4', position: 'right' },
  { name: 'name5', position: 'left' },
  { name: 'name6', position: 'left2' },
  { name: 'name6', position: 'left1' },
  { name: 'name7', position: 'left2' },
]
console.log('index.js::335 ', omitDuplicate(arrObjs, 'name'))
console.log('index.js::335 ', omitDuplicate(arrObjs, 'position'))
*/

export default omitDuplicates
