import packageJson from "../../package.json";

export const localState = () => {
  try {
    const serializedState = localStorage.getItem(packageJson.name)
    if (serializedState === null) return undefined

    return JSON.parse(localStorage.getItem(packageJson.name))
  } catch (e) {
    console.log("localStorage.js error while loading LocalStorage::e ", e)
    return undefined
  }
}

export const saveLocalState = (state = {}) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(packageJson.name, serializedState)
  } catch (e) {
    console.log("localStorage.js error while loading LocalStorage::e ", e)
  }
}