// import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  // const error = useRouteError()

  return (
    <body className="bg-gray-100 flex flex-col items-center justify-center h-[400px]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Oops!</h1>
        <p className="text-lg mb-4">
          The page you are looking for could not be found.
        </p>
        <a
          href="#"
          className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Go to Home Page
        </a>
      </div>
    </body>
  )

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {/*<p>
        <i>{error?.statusText || error?.message}</i>
      </p>*/}
    </div>
  )
}
