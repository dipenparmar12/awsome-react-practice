export function getPageRoutes(options) {
  const { mapRoutes } = options || {}
  const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })

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

export default getPageRoutes
