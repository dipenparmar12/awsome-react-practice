import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Route, Switch } from 'react-router-dom'
import HashRouteExample from '../Route/HashRouteExample'
import RouteExample from '../Route/RouteExample'
//

export const routes = {
  root: {
    name: 'Home',
    path: '/home',
    render: (props) => <p> React Home </p>,
  },

  routeExample: {
    name: 'Route example',
    path: '/app/routes',
    render: (props) => <RouteExample {...props} />,
  },

  hasRoute: {
    name: 'Hash Routes',
    path: '/app/hash-route',
    render: (props) => <HashRouteExample {...props} />,
  },

  test: {
    name: 'testing',
    path: '/test/:component?',
    render: (props) => <p> Testing </p>,
  },
}

const SwitchApp = () => {
  const appRoutes = { ...routes } // ...otherRoutes
  React.useEffect(() => {
    ReactDOM.render(
      Object.values(appRoutes).map((route) => {
        return createMenuItem(route.path, route.name)
      }),
      document.getElementById('routes')
    )
  }, [appRoutes])

  return (
    <>
      <Switch>
        {Object.entries(appRoutes).map(([k, route]) => {
          return (
            <Route
              exact
              key={k + Math.random()}
              path={route?.path}
              render={route?.render}
              {...route}
            />
          )
        })}

        {/* <Redirect to={appRoutes?.root?.path} /> */}
      </Switch>
    </>
  )
}

export default SwitchApp

const createMenuItem = (path, title) => {
  return (
    <React.Fragment key={Math.random()}>
      <li style={{ display: 'inline' }}>
        <a href={'#' + path} style={{ marginLeft: '10px' }}>
          {' '}
          {title}{' '}
        </a>
      </li>
    </React.Fragment>
  )
}
