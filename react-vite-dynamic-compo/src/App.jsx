import { BrowserRouter as Router, Link, useRoutes } from 'react-router-dom'
import NotFound from '@/pages/NotFound'
import Loading from '@/components/Loading'
import {
  Login,
  OwnUserProfile,
  Register,
  UserProfile,
  Users,
  UsersIndex,
} from './screens'
import { Fragment, Suspense } from 'react'
import Navbar, { getPageRoutes } from '@/layout/Navbar.jsx'

export function App() {
  const routes = [
    // A route object has the same properties as a <Route>
    // element. The `children` is just an array of child routes.
    {
      path: '/',
      element: <h1> Home Page </h1>,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/users',
      element: <Users />,
      children: [
        {
          path: '/users/1',
          element: <UsersIndex />,
        },
        { path: '/users/:id', element: <UserProfile /> },
        { path: '/users/me', element: <OwnUserProfile /> },
      ],
    },
    ...getPageRoutes({ mapRoutes: true }),
    { path: '*', element: <NotFound /> },
  ]

  // console.log('App.jsx::42 ', getPageRoutes({ mapRoutes: true }))

  // We removed the <BrowserRouter> element from App because the
  // useRoutes hook needs to be in the context of a <BrowserRouter>
  // element. This is a common pattern with React Router apps that
  // are rendered in different environments. To render an <App>,
  // you'll need to wrap it in your own <BrowserRouter> element.
  let element = useRoutes(routes)

  // const dynamicPageRoutes = useRoutes(getPageRoutes({ mapRoutes: true }))

  const links = [
    { name: 'Login', path: '/login', element: <>Hl</> },
    { name: 'Users', path: '/users', element: <>Hl</> },
    { name: 'users/100', path: '/users/100', element: <>Hl</> },
  ]

  // console.log('App.jsx::55 getPageRoutes()', getPageRoutes())

  return (
    <Suspense fallback={Loading}>
      {/*
        <ul>
          {links.map((li) => (
            <Fragment key={li.path}>
              <Link to={li.path}>{li.name}</Link> |{' '}
            </Fragment>
          ))}
        </ul>
      */}
      <Navbar routes={links} />

      <>{element}</>
    </Suspense>
  )
}

export default function AppRouter() {
  return (
    <Router>
      <App />
    </Router>
  )
}
