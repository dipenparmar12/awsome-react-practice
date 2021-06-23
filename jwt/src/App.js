import './App.css'
import { Route, Switch } from 'react-router-dom'
import Login from './component/Login'
import HomeScreen from './component/HomeScreen'
import RoutePrivate from './route/RoutePrivate'
import useAuth from './hooks/UseAuth'

function App() {
  const { authLoading, authToken } = useAuth()
  return (
    <>
      <Switch>
        {authToken && <Route exact path={'/'} component={HomeScreen} />}
        {!authToken && <Route exact path={'/(|login)/'} component={Login} />}
        {!authLoading && <RoutePrivate exact path={'/admin'} component={HomeScreen} />}
        <Route component={() => <h1 className='center'> NOT FOUND </h1>} />
      </Switch>
    </>
  )
}

export default App
