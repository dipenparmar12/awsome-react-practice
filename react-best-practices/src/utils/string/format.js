import Str from '.'

const format_str = (str) =>
  str && str.constructor.name === 'String'
    ? Str.capitalize(str.toString().replace(/_/g, ' ').trim())
    : str

export default format_str
