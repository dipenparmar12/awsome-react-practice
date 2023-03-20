import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routes } from '../App'
import { useAuth } from '../context/AuthContext'

const PrivateTemp = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      I am logged in as `{auth?.user}
      `
      <hr />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => auth.signOut(() => navigate(routes.login.path))}
      >
        sing out{' '}
      </button>
    </div>
  )
}

export default PrivateTemp
