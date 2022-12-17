/**
 * Check if the value is a number.
 * @param {String | Number} value
 * @see https://github.com/rsuite/rsuite/blob/main/src/InputNumber/InputNumber.tsx#L66
 */
const isNumber = (value) => /(^-?|^\+?|^\d?)\d*\.\d+$/.test(value + '')
