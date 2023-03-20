/*!
 *
 *
 *
 */
function getDate(start = new Date(1977, 8, 1), end = new Date(2999, 8, 1)) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  )
}

// let rndDate = randomDate(new Date(1977, 8, 1), new Date(2999, 8, 1));
export default getDate
