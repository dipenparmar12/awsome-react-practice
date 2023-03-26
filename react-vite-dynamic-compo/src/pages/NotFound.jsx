import { useLocation } from 'react-router-dom'
import React from 'react'

export default function NotFound() {
  let location = useLocation()

  // React.useEffect(() => {
  //   console.log('NotFound.jsx::6 ', location)
  // }, [])

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center h-[400px]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-4">
          Sorry, the page you requested could not be found.
          <p>Location: {location?.pathname || ''}</p>
        </p>
        <a
          href="#"
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Go to Home Page
        </a>
      </div>
    </div>
  )

  return (
    <div id="notfound-page">
      <h1>Oops!</h1>
      <p>Page not found.</p>
      <p>Location: {location?.pathname || ''}</p>
    </div>
  )
}
