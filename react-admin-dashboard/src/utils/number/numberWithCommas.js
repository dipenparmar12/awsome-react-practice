/**
 * @param {number | bigint} num
 * @example numberWithCommas(100000) // "100,000"
 * @src https://stackoverflow.com/a/2901298/8592918
 */
function numberWithCommas(x) {
  return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
}

export default numberWithCommas

/* 
========================================================
  Test Cases 
======================================================== 
*/
// function test(x, expect) {
//   const result = numberWithCommas(x)
//   const pass = result === expect
//   console.log(`${pass ? '✓' : 'ERROR ====>'} ${x} => ${result}`)
//   return pass
// }

// let failures = 0
// failures += !test(0, '0')
// failures += !test(0.123456, '0.123456')
// failures += !test(100, '100')
// failures += !test(100.123456, '100.123456')
// failures += !test(1000, '1,000')
// failures += !test(1000.123456, '1,000.123456')
// failures += !test(10000, '10,000')
// failures += !test(10000.123456, '10,000.123456')
// failures += !test(100000, '100,000')
// failures += !test(100000.123456, '100,000.123456')
// failures += !test(1000000, '1,000,000')
// failures += !test(1000000.123456, '1,000,000.123456')
// failures += !test(10000000, '10,000,000')
// failures += !test(10000000.123456, '10,000,000.123456')
// if (failures) {
//   console.log(`${failures} test(s) failed`)
// } else {
//   console.log('All tests passed')
// }
// export default numberWithCommas
