/* eslint-disable no-plusplus */
/**
 * convert dataURL to file object
 * @param {String} dataUri
 * @param {String} filename optional argument, determined filename from dataUri
 * @returns {File}
 *
 */
function dataURLtoFile(dataUri, filename) {
  const arr = dataUri.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

export default dataURLtoFile

/* 
========================================================
  Method 2 
======================================================== 

function dataURLtoFile(dataUri, filename) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  let byteString
  if (dataUri.split(',')[0].indexOf('base64') >= 0)
    byteString = atob(dataUri.split(',')[1])
  else byteString = unescape(dataUri.split(',')[1])

  // separate out the mime component
  const mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to a typed array
  const ia = new Uint8Array(byteString.length)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new File([ia], filename, { type: mimeString })
}
*/
