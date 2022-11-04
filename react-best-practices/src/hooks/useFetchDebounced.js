import { useCallback } from 'react'

/**
 *
 * @param cb
 * @param wait
 * @returns {(function(...[*]=): void)|*}
 * @src https://medium.com/@kartikag01/debounce-api-request-in-react-functional-component-664b4971d9dd
 */
function useMethodDebounced(cb, wait = 250) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(debounce(cb, wait), [cb])
}

export default useMethodDebounced

function debounce(func, wait) {
  let timeout
  return function (...args) {
    const context = this
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      func.apply(context, args)
    }, wait)
  }
}

/*

Example 
  const fetchDataDebounce = useMethodDebounced(fetchData)
  const getUsersDebounce = useMethodDebounced(getUsers, 2000)
*/
