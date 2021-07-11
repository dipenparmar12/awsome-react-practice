import React from 'react'
import { HashRouter, Route, Switch, Link, useParams } from 'react-router-dom'

const HashRouteExample = (props) => {
  return (
    <div>
      <h4> Hash Route Example</h4>
      <HashRouter>
        <ul style={{ display: 'flex', listStyleType: 'none', margin: '10px' }}>
          <li style={{ margin: '5px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ margin: '5px' }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ margin: '5px' }}>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li style={{ margin: '5px' }}>
            <Link to="/user/100">User ID</Link>
          </li>
        </ul>

        {/* // */}
        <Switch>
          <Route exact path="/">
            <h5> HOME page</h5>
          </Route>
          <Route exact path="/about">
            <h5> About page</h5>
          </Route>
          <Route exact path="/dashboard">
            <h5> My Dashboard </h5>
          </Route>
          <Route path="/user/:id">
            <Child />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  )
}

function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams()

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  )
}
export default HashRouteExample
