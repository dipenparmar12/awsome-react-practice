import Layout from './layout/Layout'
import { Routes, Route } from 'react-router-dom'
import Svg from './lib/Svg/Svg'
import { RequireAuth, useAuth } from './context/AuthContext'
import LoginPage from './pages/LoginPage'
import { useNavigate } from 'react-router-dom'
import React from 'react'

function Private() {
  let auth = useAuth()
  const navigate = useNavigate()
  return (
    <div>
      I am logged in as `{auth?.user}`
      <hr />
      <br />
      <button
        onClick={() => {
          auth.signOut(() => navigate('/'))
        }}
      >
        sing out{' '}
      </button>
    </div>
  )
}

export const routesPublic = {
  login: {
    label: 'Login',
    path: '/' | '/login',
    element: <LoginPage />,
    public: true,
  },
}

export const routesPrivate = {
  projects: {
    label: 'Projects',
    path: `/` | '/Projects',
    element: <Private />,
    icon: <Svg.Plus />,
  },
  expenses: {
    label: 'Expenses',
    path: `/expenses`,
    element: <div className='text-2xl'> Expenses </div>,
    icon: <Svg.Plus />,
  },
  incomes: {
    label: 'Incomes',
    path: `/incomes`,
    element: <div className='text-2xl'> Incomes </div>,
    icon: <Svg.Plus />,
  },
  users: {
    label: 'Users',
    path: `/users`,
    element: <div className='text-2xl'> Users </div>,
    icon: <Svg.Plus />,
  },
}

export const routes = Object.assign({}, routesPrivate, routesPublic)
export const routesPrivateArr = Object.entries(routesPrivate)
export const routesPublicArr = Object.entries(routesPublic)

function App() {
  let auth = useAuth()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (auth?.user) {
    }
  }, [auth?.user, navigate])

  return (
    <>
      {!auth?.user && (
        <Routes>
          {routesPublicArr?.map(([k, route]) => (
            <Route {...route} key={route.label + k} />
          ))}
        </Routes>
      )}

      {auth?.user && (
        <Layout>
          <Routes>
            {routesPrivateArr?.map(([k, route]) => (
              <Route
                {...route}
                key={route.label + k}
                element={
                  <>
                    <RequireAuth>{route.element}</RequireAuth>
                  </>
                }
              />
            ))}
          </Routes>

          <br />
          <h1 className='pb-1 '>
            One content goes
            <span> HERE </span>
            <div>Two content goes here</div>
          </h1>
        </Layout>
      )}
    </>
  )
}

export default App
