import { createContext, useContext } from 'react'
import { useDispatch } from 'react-redux'

export const WpContext = createContext(null)

export default function WpContextProvider({ children }) {
  let socket
  return <WpContext.Provider value={{ socket }}>{children}</WpContext.Provider>
}

export function useWebSocket() {
  return useContext(WpContext)
}
