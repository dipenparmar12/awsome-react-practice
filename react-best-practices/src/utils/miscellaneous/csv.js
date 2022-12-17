/// export csv from array of objects
function objArrayToCsv(objArr, delimiter = ',', download = false) {
  var csv = ''
  for (var i = 0; i < objArr.length; i++) {
    var line = ''
    for (var index in objArr[i]) {
      if (line != '') line += delimiter
      line += objArr[i][index]
    }
    csv += line + '\r\n'
  }
  return download ? downloadCSV(csv) : csv
}

function downloadCSV(csv, filename = 'data.csv') {
  var csvFile
  var downloadLink

  // CSV file
  csvFile = new Blob([csv], { type: 'text/csv' })

  // Download link
  downloadLink = document.createElement('a')

  // File name
  downloadLink.download = filename

  // Create a link to the file
  downloadLink.href = window.URL.createObjectURL(csvFile)

  // Hide download link
  downloadLink.style.display = 'none'

  // Add the link to DOM
  document.body.appendChild(downloadLink)

  // Click download link
  downloadLink.click()
}

//  advance config
// function objArrayToCsv(objArray, header, _config) {
//   var csv = ''
//   var row = ''
//   var headerRow = ''
//   var headerArray = []
//   var config = _config || {}
//   var delimiter = config.delimiter || ','
//   var linebreak = config.linebreak || '\n'
//   var header = config.header || true
//   var headerPrefix = config.headerPrefix || ''
//   var headerSuffix = config.headerSuffix || ''
//   var quote = config.quote || '"'
//   var escape = config.escape || '"'
//   var quoteEscaped = config.quoteEscaped || '""'

//   if (header) {
//     for (var i = 0; i < objArray.length; i++) {
//       for (var key in objArray[i]) {
//         if (headerArray.indexOf(key) === -1) {
//           headerArray.push(key)
//         }
//       }
//     }
//     headerRow =
//       headerPrefix + headerArray.join(delimiter) + headerSuffix + linebreak
//   }

//   for (var i = 0; i < objArray.length; i++) {
//     var obj = objArray[i]
//     row = ''
//     for (var j = 0; j < headerArray.length; j++) {
//       row +=
//         quote +
//         (obj[headerArray[j]] || '').replace(
//           new RegExp(quote, 'g'),
//           quoteEscaped,
//         ) +
//         quote +
//         delimiter
//     }
//     row = row.slice(0, -1)
//     csv += row + linebreak
//   }
//   return headerRow + csv.slice(0, -1)
// }
