/**
 *
 * @desc Random Username Generator Javascript
 * @returns String
 * @src https://stackoverflow.com/q/30151374/8592918
 */
function getRandomStr(arr) {
  const names = arr || [
    'John',
    'Mike',
    'Paul',
    'Raymond',
    'Dipen',
    'Hitesh',
    'Oliver',
    'Parker',
  ]
  return names[Math.floor(Math.random() * names.length)]
}

export default getRandomStr
