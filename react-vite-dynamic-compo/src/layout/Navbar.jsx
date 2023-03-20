import { createBrowserRouter, Link } from 'react-router-dom'

export function getPageRoutes(options) {
  const { mapRoutes } = options || {}
  const pages = import.meta.glob('../pages/**/*.jsx', { eager: true })

  let routes = []
  for (const path of Object.keys(pages)) {
    const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1]
    // console.log('Navbar.jsx::10 fileName', fileName)
    if (!fileName) continue

    const normalizedPathName = fileName.includes('$')
      ? fileName.replace('$', ':')
      : fileName.replace(/\/index/, '')

    // if (fileName === 'index') {
    //   continue
    // }

    routes.push({
      ...pages[path],
      // path: `/${normalizedPathName.toLowerCase()}`,
      path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
      name: fileName === 'index' ? '/root' : `/${normalizedPathName}`,
      Element: pages[path].default,
      loader: pages[path]?.loader,
      action: pages[path]?.action,
      ErrorBoundary: pages[path]?.ErrorBoundary,
    })
  }

  if (mapRoutes) {
    return routes.map(({ Element, ErrorBoundary, ...rest }) => ({
      ...rest,
      element: <Element />,
      ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
    }))
  }

  return routes
}

function Navbar({ routes = [] }) {
  // React.useEffect(() => {
  //   console.log('Navbar.jsx::[29]', getPageRoutes())
  // }, [])

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div
          className="items-center justify-between w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to={'/'}
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </Link>
            </li>

            {[].concat(routes, getPageRoutes()).map((route, index) => {
              return (
                <li key={index}>
                  <Link
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    to={route.path}
                  >
                    {route.name || '-'}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar