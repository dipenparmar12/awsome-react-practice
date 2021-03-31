import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
  withRouter,
} from 'react-router-dom'

const RouteExample = (props) => {
  return (
    <div>
      <h1> Simple Route Example</h1>
      <BrowserRouter>
        <ul style={{ display: 'flex', listStyleType: 'none', margin: '10px' }}>
          <li style={{ margin: '5px' }}>
            <Link to='/'>Home</Link>
          </li>
          <li style={{ margin: '5px' }}>
            <Link to='/about'>About</Link>
          </li>
          <li style={{ margin: '5px' }}>
            <Link to='/dashboard'>Dashboard</Link>
          </li>
          <li style={{ margin: '5px' }}>
            <Link to='/user/100'>User ID</Link>
          </li>
        </ul>

        {/* // */}
        <Switch>
          <Route exact path='/'>
            <h1> HOME page</h1>
          </Route>
          <Route exact path='/about'>
            <h1> About page</h1>
          </Route>
          <Route exact path='/dashboard'>
            <h1> My Dashboard </h1>
          </Route>

          <Route path='/user/:id' children={<Child />} />
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
