import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from '@/pages/NotFound'

const pages = import.meta.glob('./pages/**/*.jsx', { eager: true })

const routes = [
  // {
  //   path: '/',
  //   Element: <div> hello wother </div>,
  // },
  {
    path: '/temp',
    Element: () => <h1> hello world </h1>,
  },
]

for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.jsx$/)?.[1]
  if (!fileName) {
    continue
  }

  console.log('App[17]: routes', fileName)

  const normalizedPathName = fileName.includes('$')
    ? fileName.replace('$', ':')
    : fileName.replace(/\/index/, '')

  // if (fileName === 'index') {
  //   continue
  // }

  routes.push({
    path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
    Element: pages[path].default,
    loader: pages[path]?.loader,
    action: pages[path]?.action,
    ErrorBoundary: pages[path]?.ErrorBoundary,
  })
  // console.log('App[25]:router', routes)
}

routes.push({
  path: '/*',
  Element: NotFound,
})

const router = createBrowserRouter(
  routes.map(({ Element, ErrorBoundary, ...rest }) => ({
    ...rest,
    element: <Element />,
    ...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
  })),
)

function App() {
  return <RouterProvider router={router} />
}

export default App
