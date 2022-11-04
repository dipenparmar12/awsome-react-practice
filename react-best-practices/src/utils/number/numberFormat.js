/**
 * @param {number | bigint} num
 * @param {string} currency
 * @param options
 * @src https://stackoverflow.com/a/68536579/8592918,
 *      https://flaviocopes.com/how-to-format-number-as-currency-javascript/
 */
function numberFormat(num, currency = 'USD', options = {}) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    ...options,
  }).format(num)
}

/*
*
numberFormat(number || 0, {
  minimumSignificantDigits: 4,
  // localeMatcher?: string;
  // style?: string;
  // currency?: string;
  // currencyDisplay?: string;
  // useGrouping?: boolean;
  // minimumIntegerDigits?: number;
  // minimumFractionDigits?: number;
  // maximumFractionDigits?: number;
  // minimumSignificantDigits?: number;
  // maximumSignificantDigits?: number;
})
* */

export default numberFormat
