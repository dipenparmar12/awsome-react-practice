import React from 'react'

/**
 *
 * @param {*} initialState
 * @returns
 * @src https://www.30secondsofcode.org/react/s/use-session-storage
 */
const usePersistedState = (name, defaultValue) => {
  const [value, setValue] = React.useState(defaultValue)
  const nameRef = React.useRef(name)

  React.useEffect(() => {
    try {
      const storedValue = localStorage.getItem(name)
      if (storedValue !== null) setValue(storedValue)
      else localStorage.setItem(name, defaultValue)
    } catch {
      setValue(defaultValue)
    }
  }, [])

  React.useEffect(() => {
    try {
      localStorage.setItem(nameRef.current, value)
    } catch {}
  }, [value])

  React.useEffect(() => {
    const lastName = nameRef.current
    if (name !== lastName) {
      try {
        localStorage.setItem(name, value)
        nameRef.current = name
        localStorage.removeItem(lastName)
      } catch {}
    }
  }, [name])

  return [value, setValue]
}

export default usePersistedState

/*
const MyComponent = ({ name }) => {
  const [val, setVal] = usePersistedState(name, 10);
  return (
    <input
      value={val}
      onChange={e => {
        setVal(e.target.value);
      }}
    />
  );
};

const MyApp = () => {
  const [name, setName] = React.useState('my-value');
  return (
    <>
      <MyComponent name={name} />
      <input
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
    </>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('root'));
*/
