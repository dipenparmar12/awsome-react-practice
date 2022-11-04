export default function isBool(val) {
  if (typeof val === 'string') {
    val = val.toLowerCase()
  }
  return [true, false, 'true', 'false'].includes(val)
}

export function boolToStr(val) {
  if ([true, 'true', 1].includes(val)) {
    return 'Yes'
  }
  if ([false, 'false', 0].includes(val)) {
    return 'No'
  }
  return val
}
