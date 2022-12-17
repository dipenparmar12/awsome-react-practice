import React from 'react'
import { Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { routes } from '../App'
import useLocalStorageState from '../hooks/useLocalStorageState'

/**
 *
 * @src https://reactrouter.com/docs/en/v6/examples/auth
 */

// TODO::AUTH API integration
export const authService = {
  isAuthenticated: false,
  signIn(callback) {
    authService.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  },
  signOut(callback) {
    authService.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

let AuthContext = React.createContext(null)
export default function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorageState('auth', null)

  let signIn = (newUser, callback) => {
    return authService.signIn(() => {
      setUser(newUser)
      callback()
    })
  }

  let signOut = (callback) => {
    return authService.signOut(() => {
      setUser(null)
      callback()
    })
  }

  let value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return React.useContext(AuthContext)
}

export function RequireAuth({ children }) {
  let auth = React.useContext(AuthContext)
  let location = useLocation()
  // React.useEffect(() => {
  //   console.log('AuthContext.js::[55]', auth.user)
  // }, [auth.user])

  if (!auth.user) {
    return <Navigate to={routes.login.path} state={{ from: location }} />
  }

  return children
}
