import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import useLocalStorageState from '../hooks/useLocalStorageState'
import { routes } from '../App'

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

const AuthContext = React.createContext(null)
export default function AuthProvider({ children }) {
  const [user, setUser] = useLocalStorageState('auth', null)
  const navigate = useNavigate()

  const signIn = (newUser, callback) => {
    return authService.signIn(() => {
      setUser(newUser)
      callback()
    })
  }

  const signOut = (callback) => {
    return authService.signOut(() => {
      setUser(null)
      callback()
    })
  }

  const signOutRedirect = (newUser, callback) => {
    return authService.signIn(() => {
      setUser(newUser)
      navigate(routes.login.path)
    })
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { user, signIn, signOut, signOutRedirect }
  // const value = React.memo(() => ({ user, signIn, signOut })) // Not working
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return React.useContext(AuthContext)
}

export const RequireAuth = function ({ children }) {
  const auth = React.useContext(AuthContext)
  const location = useLocation()
  // React.useEffect(() => {
  //   console.log('AuthContext.js::[55]', auth.user)
  // }, [auth.user])

  if (!auth.user) {
    return <Navigate to={routes.login.path} state={{ from: location }} />
  }

  return children
}
