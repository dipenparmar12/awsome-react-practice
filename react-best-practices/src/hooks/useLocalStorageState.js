import React from 'react'

/**
 *
 * @returns
 * @param keyName
 * @param defaultValue
 * @src https://www.30secondsofcode.org/react/s/use-local-storage
 */
const useLocalStorageState = (keyName, defaultValue) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    try {
      const value = window.localStorage.getItem(keyName)

      if (value) {
        return JSON.parse(value)
      } else {
        window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (err) {
      return defaultValue
    }
  })

  const setValue = (newValue) => {
    try {
      window.localStorage.setItem(keyName, JSON.stringify(newValue))
    } catch (err) {}
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}
export default useLocalStorageState

/*

const MyApp = () => {
  const [name, setName] = useLocalStorageState('name', 'John');

  return <input value={name} onChange={e => setName(e.target.value)} />;
};

ReactDOM.render(<MyApp />, document.getElementById('root'));

*/
