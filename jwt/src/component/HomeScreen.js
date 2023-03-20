import React from 'react'
import useAuth from '../hooks/UseAuth'

export default function HomeScreen() {
  const { logout } = useAuth()

  return (
    <div className='center mt'>
      <h1>Welcome to the jungle</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}
