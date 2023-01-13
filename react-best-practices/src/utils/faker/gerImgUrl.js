/**
 *
 * @param {*} size
 * @returns {String} imgUrl
 */
function getImgUrl(size = '300x200') {
  return `https://source.unsplash.com/random/${size}`
}

export default getImgUrl
