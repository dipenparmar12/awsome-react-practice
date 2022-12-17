/**
 * Return a string of elements chosen randomly from a sequence of arrays
 */
function getParagraph() {
  // Return a random element of an array
  function getRandomElement(arr) {
    // eslint-disable-next-line no-bitwise
    return arr[(Math.random() * arr.length) | 0]
  }

  let phrases = [
    ['Huge', 'Extraordinary', 'Average', 'Amazing'],
    ['Intelligence', 'Ignorance', 'Mediocrity', 'Courage', 'Cowardice'],
    ['Nice', 'Good', 'Happy', 'Elite'],
  ]
  let phrase = []
  phrases.forEach(function (a) {
    phrase.push(getRandomElement(a))
  })
  return phrase.join(' ')
}

// const onlyDefinedKeys = pick(req.query, ['title', 'rating', 'year', 'genres']);
// module.exports = generateParagraph

export default getParagraph
