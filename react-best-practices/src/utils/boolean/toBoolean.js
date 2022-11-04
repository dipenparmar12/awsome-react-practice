/**
 *
 * @param {*} str
 * @returns {boolean} true if str is a 'true'
 * @src: https://stackoverflow.com/a/69397610/8592918
 */
function toBoolean(str) {
  if (str === 1) return true
  if (str === 0) return false
  return String(str && str.valueOf()).toLowerCase() === true.toString()
}

// var myValue = 'false'
// console.log('Bool is myValu -> ' + toBoolean(myValue))
// console.log('Bool is False -> ' + toBoolean('False'))
// console.log('Bool is FALSE -> ' + toBoolean('FALSE'))
// console.log('Bool is TRUE -> ' + toBoolean('TRUE'))
// console.log('Bool is true -> ' + toBoolean('true'))
// console.log('Bool is True -> ' + toBoolean('True'))
// console.log('Bool is 1 -> ' + toBoolean(1))
// console.log('Bool is 0 -> ' + toBoolean(0))

export default toBoolean



const stringToBoolean: function(string){
    switch(string.toLowerCase().trim()){
        case "true": case "yes": case "1": return true;
        case "false": case "no": case "0": case null: return false;
        default: return Boolean(string);
    }
}