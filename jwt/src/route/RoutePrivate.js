import { Route, Link } from 'react-router-dom'

export default function RoutePrivate({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return localStorage.getItem('authToken') ? (
          <Component {...rest} />
        ) : (
          <>
            <div className='access_denied'>
              <h2>Access Denided</h2>
              <Link to='/'> Login </Link>
            </div>
          </>
        )
      }}
    />
  )
}
