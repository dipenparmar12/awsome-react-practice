import React from 'react'


/**
 *
 * @param {*} defaultValue
 * @returns
 * @src https://usehooks-ts.com/react-hook/use-boolean
 */
function useBoolean(defaultValue) {
  const [value, setValue] = React.useState(!!defaultValue)

  const setTrue = React.useCallback(() => setValue(true), [])
  const setFalse = React.useCallback(() => setValue(false), [])
  const toggle = React.useCallback(() => setValue((oldValue) => !oldValue), [])

  return [value, setValue, toggle, setTrue, setFalse]
}

export default useBoolean


/**
 *
 * @param {*} initialValue
 * @returns {Array} [{ name: '', value: '' }]
 * @src https://dev.to/iamludal/react-custom-hooks-useboolean-3m6c
 */
const useBooleanV2 = (initialValue) => {
  const [value, setValue] = React.useState(initialValue)

  const updateValue = React.useRef({
    toggle: () => setValue((oldValue) => !oldValue),
    on: () => setValue(true),
    off: () => setValue(false),
    // yes: () => setValue(true),
    // no: () => setValue(false),
  })

  return [value, updateValue.current, setValue]
}

export { useBooleanV2 }

/**
 @Example 

 const Articles = () => {
  const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useBooleanV2(false)
    const [isError, setIsError] = useBooleanV2(false)

    useEffect(() => {
        setIsLoading.on()
        fetch(...)
            .then(res => res.json())
            .then(setArticles)
            .catch(setIsError.on)
            .finally(setIsLoading.off)
  }, [])

  return <> {isLoading ? "YES Loading":"NO Loading"} </>
}
 */
