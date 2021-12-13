import React from 'react'

const getLocalValue = (key, initState) => {
  const localValue = JSON.parse(localStorage.getItem(key) || null) || null
  if (localValue) return localValue
  if (initState instanceof Function) return initState()
  return initState
}

const useLocalStorageState = (key, initState = null) => {
  const [value, setValue] = React.useState(() => getLocalValue(key, initState))
  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue, key]
}

export default useLocalStorageState
