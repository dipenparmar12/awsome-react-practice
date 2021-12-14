import { Routes, Route, useNavigate } from 'react-router-dom'
import React from 'react'
import Layout from './layout/Layout'
import Svg from './lib/Svg/Svg'
import { RequireAuth, useAuth } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import ExamplesTemp from './temp/ExamplesTemp'
import NotFound from './pages/NotFound'
import PrivateTemp from './temp/PrivateTemp'

export const routesPublic = {
  login: {
    label: 'Login',
    path: '/' || '/login',
    element: <LoginPage />,
    public: true,
  },
}

export const routesPrivate = {
  home: {
    label: 'Home',
    path: '/',
    element: <div className="text-2xl"> Home </div>,
    icon: <Svg.Plus />,
  },
  projects: {
    label: 'Projects',
    path: '/Projects',
    element: <div className="text-2xl"> Projects </div>,
    icon: <Svg.Plus />,
  },
  expenses: {
    label: 'Expenses',
    path: '/expenses',
    element: <div className="text-2xl"> Expenses </div>,
    icon: <Svg.Plus />,
  },
  incomes: {
    label: 'Incomes',
    path: '/incomes',
    element: <div className="text-2xl"> Incomes </div>,
    icon: <Svg.Plus />,
  },
  users: {
    label: 'Users',
    path: '/users',
    element: <div className="text-2xl"> Users </div>,
    icon: <Svg.Users />,
  },
  profile: {
    label: 'Profile',
    path: '/profile',
    element: <PrivateTemp />,
    icon: <Svg.User />,
  },
  examples: {
    label: 'Examples',
    path: '/examples',
    element: <ExamplesTemp />,
    icon: <Svg.InfoCircle />,
  },
  a: {
    label: 'Route expenses',
    path: '/expenses',
    element: <div> path: /expenses </div>,
    icon: <Svg.InfoCircle />,
  },
  b: {
    label: 'Route incomes',
    path: '/incomes',
    element: <div> path: /Route incomes </div>,
    icon: <Svg.InfoCircle />,
  },
  dropdown: {
    label: 'Dropdown',
    path: '/dropdown',
    element: <div className="text-2xl"> Dropdown </div>,
    icon: <Svg.Home />,
    children: {
      a: {
        label: 'Route expenses',
        path: '/expenses',
        element: <div> path: /expenses </div>,
        icon: <Svg.InfoCircle />,
      },
      b: {
        label: 'Route incomes',
        path: '/incomes',
        element: <div> path: /Route incomes </div>,
        icon: <Svg.InfoCircle />,
      },
    },
  },
}

export const routes = { ...routesPrivate, ...routesPublic }
export const routesPrivateArr = Object.entries(routesPrivate)
export const routesPublicArr = Object.entries(routesPublic)

const App = function () {
  const auth = useAuth()

  return (
    <>
      {auth?.user && (
        <Routes>
          {routesPrivateArr?.map(([k, route]) => (
            <Route
              // {...route}
              key={route.label + k}
              path={route.path}
              element={
                <RequireAuth>
                  <Layout>
                    <span className="hidden text-test"> I am </span>
                    {route.element}
                  </Layout>
                </RequireAuth>
              }
            />
          ))}
        </Routes>
      )}

      <Routes>
        {routesPublicArr?.map(([k, route]) => (
          <Route key={route.label + k} {...route} location={route.location} />
        ))}
        <Route path="/test" element={<div> Test Route login. </div>} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  )
}

export default App
