import React from 'react'
import { BrowserRouter, Route, Switch, Link, useParams } from 'react-router-dom'

const RouteExample = (props) => {
  return (
    <div>
      <h4> Simple Route Example</h4>
      <BrowserRouter>
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
          <Route exact path="/about">
            <h3> About page</h3>
          </Route>
          <Route exact path="/dashboard">
            <h3> My Dashboard </h3>
          </Route>

          <Route path="/user/:id">
            <Child />
          </Route>
        </Switch>
      </BrowserRouter>
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
export default RouteExample
