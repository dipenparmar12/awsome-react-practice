const loadState = (key = 'cc_state') => {
  try {
    const serializedState = localStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState) || undefined
  } catch (err) {
    console.log('localStorage.js::[9] err', err)
    return false
  }
}

const saveState = (key = 'cc_state', state) => {
  try {
    if (state === undefined || state === null) {
      return localStorage.removeItem(key)
    }
    const serializedState = JSON.stringify(state)
    localStorage.setItem(key, serializedState)
    return state
  } catch (err) {
    console.log('localStorage.js::[23] err', err)
    return false
    // ignore write errors
  }
}

export { loadState, saveState }
