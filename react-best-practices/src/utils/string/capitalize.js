/**
 *
 * @param {String} str - string to format
 * @returns {String} - formatted string
 * @example
 * capitalize('hello-world') // 'Hello World'
 * capitalize('hello_World') // 'Hello World'
 * capitalize('hello-word_how_are-you') // 'Hello word how are you'
 */
function capitalize(str, regex = /[_-]/g, replacer = ' ') {
  const sanitized = str.replace(regex, replacer)
  return sanitized.charAt(0).toUpperCase() + sanitized.slice(1)
}

export default capitalize
