/**
 *
 * @param str
 * @returns
 */
function capitalizeWords(str) {
  return str && str.constructor.name === 'String'
    ? str
        .toString()
        .replace(/_/g, ' ')
        .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
        .trim()
    : str
}

const t = ['one', 'tWo thre', 'trhee FOUR', 'again tTTT', 'aaaa aaaa aaaa']
t.forEach((el, i) => {
  console.log(`${t[i]}, ===> `, capitalizeWords(el))
})

export default capitalizeWords
