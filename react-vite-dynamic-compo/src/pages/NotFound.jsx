import { useLocation } from 'react-router-dom'
import React from 'react'

export default function NotFound() {
  let location = useLocation()

  // React.useEffect(() => {
  //   console.log('NotFound.jsx::6 ', location)
  // }, [])

  return (
    <div id="notfound-page">
      <h1>Oops!</h1>
      <p>Page not found.</p>
      <p>Location: {location?.pathname || ''}</p>
    </div>
  )
}
