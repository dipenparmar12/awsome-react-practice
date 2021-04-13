import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'

// import { Redirect } from 'react-router-dom'

// import ReactReduxApp from '../concepts/ReactReduxApp'
// import ReduxSaga from '../concepts/ReduxSaga'
// import WebSocket from '../concepts/WebSocket'
// import HashRouteExample from '../Route/HashRouteExample'
// import RouteExample from '../Route/RouteExample'
//

const SwitchApp = () => {
  const appRoutes = React.useMemo(() => ({ ...routes }), []) // ...otherRoutes
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
          {title}
        </a>
      </li>
    </React.Fragment>
  )
}
