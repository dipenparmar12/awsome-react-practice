import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <main style={{ padding: '1rem' }}>
      There's nothing here!{' '}
      <button className="inline-block link" onClick={() => navigate('/')}>
        Home{' '}
      </button>
    </main>
  )
}
export default NotFound
