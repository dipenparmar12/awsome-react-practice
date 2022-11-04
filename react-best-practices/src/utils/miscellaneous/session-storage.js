const get = (key = 'cc_state') => {
  try {
    const serializedState = sessionStorage.getItem(key)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState) || undefined
  } catch (err) {
    console.log('sessionStorage.js::[9] err', err)
    return false
  }
}

const save = (key = 'cc_state', state) => {
  try {
    if (state === undefined || state === null) {
      return sessionStorage.removeItem(key)
    }
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem(key, serializedState)
    return state
  } catch (err) {
    console.log('sessionStorage.js::[23] err', err)
    return false
    // ignore write errors
  }
}

const remove = (key = 'cc_state') => {
  try {
    return sessionStorage.removeItem(key)
    return true
  } catch (err) {
    console.log('sessionStorage.js::[23] err', err)
    return false
    // ignore write errors
  }
}

const session = { get, save, remove }
export default session
