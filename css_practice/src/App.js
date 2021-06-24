import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route, Link,
} from 'react-router-dom'
import Animations from './component/Animations'
import Icons from './component/Icons'
import Grids from './component/Grids'
import Layouts from './component/Layouts'
import Tailwind from './example_tailwind/Tailwind'
import Grid1 from './practice/jonas/Grid1'

export const appRoutes = {
  test: {
    name: 'Test',
    path: `/test`,
    component: (props) => <h1 {...props}> Test route </h1>,
  },
  Icons: {
    name: 'Icons',
    path: `/Icons`,
    component: (props) => <Icons {...props}/>,
  },
  Animations: {
    name: 'Animations',
    path: `/Animations`,
    component: (props) => <Animations {...props}/>,
  },
  Grids: {
    name: 'Grids',
    path: `/Grids`,
    component: (props) => <Grids {...props}/>,
  },
  Grid1: {
    name: 'Grid1',
    path: `/Grid1`,
    component: (props) => <Grid1 {...props}/>,
  },
  Layouts: {
    name: 'Layouts',
    path: `/Layouts`,
    component: (props) => <Layouts {...props}/>,
  },
  Tailwind: {
    name: 'Tailwind',
    path: `/Tailwind`,
    component: (props) => <Tailwind {...props}/>,
  },
}


function App() {
  return (
      <BrowserRouter>
        <nav>
          {Object.values(appRoutes).map((route) => <Link to={route.path}> {route.name}</Link>)}
        </nav>
        <Switch>
          {Object.values(appRoutes).map((route) => <Route exact path={route.path} render={route.component}/>)}
        </Switch>
      </BrowserRouter>
  )
}

export default App


// const routeReference = {
//   routeKey: {
//     name: 'Route Name',
//     path: '/users/:id/permissions',
//     permission: permissions.advanceCreate,
//     anyPermission: [permissions.salaryListAll, permissions.salaryListSelf],
//     getPath: (id) => `#/users/${id}/permissions`,
//     render: (props) => <h1 {...props}> Component </h1>,
//     isNotNavItem: true,
//     icon: 'ft ft-users',
//   },
// }
