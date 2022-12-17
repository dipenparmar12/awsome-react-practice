import React from 'react'

/**
 *
 * @param {*} initialValue
 * @returns {Object} - { value, {toggle, on, off}, setValue } - value: current value, setValue: setter, reset: resetter
 * @see https://dev.to/iamludal/react-custom-hooks-useboolean-3m6c
 */
function useToggle(initialValue) {
  const [value, setValue] = React.useState(initialValue)

  const updateValue = React.useRef({
    toggle: () => setValue((oldValue) => !oldValue),
    on: () => setValue(true),
    off: () => setValue(false),
  })

  return [value, updateValue.current, setValue]
}

export default useToggle

/**
 * Example
const Articles = () => {
  const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useBoolean(false)
    const [isError, setIsError] = useBoolean(false)

    useEffect(() => {
        setIsLoading.on()
        fetch(...)
            .then(res => res.json())
            .then(setArticles)
            .catch(setIsError.on)
            .finally(setIsLoading.off)
  }, [])
    return ...
}
 */
