import React from 'react'
import redirect from './../utils/redirect'

const useAuth = () => {
  const [authLoading, setAuthLoading] = React.useState(true)
  const [authToken, setAuthToken] = React.useState(null)

  React.useEffect(() => {
    const data = localStorage.getItem('authToken')
    setAuthToken(JSON.parse(data) || null)
    setAuthLoading(false)
  }, [])

  const setToken = (token) => {
    localStorage.setItem('authToken', JSON.stringify(token))
  }

  const logout = (e) => {
    console.log('UseAuth.js::[18] e', e)
    localStorage.removeItem('authToken')
    redirect('/')
  }

  return { authToken, setToken, authLoading, logout }
}

export default useAuth
