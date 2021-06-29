import React from 'react'
import {
  BrowserRouter, Link,
} from 'react-router-dom'
import Animations from './component/Animations'
import Icons from './component/Icons'
import Grids from './component/Grids'
import Layouts from './component/Layouts'
import Tailwind from './example_tailwind/Tailwind'

import './App.css'
import {renderSwitch} from './utils/renderSwitch';
import Card from './component/card/Card7nov';
import Test1 from './component/test/Test1';
import Nav from './component/navbar/Nav'
import NavOriExample from './component/navbar/App'

export const appRoutes = {
  test: {
    name: 'Test',
    path: `/test`,
    // component: (props) => <h1> Test route [Home page] </h1>,
    component: (props) => <Test1 />,
  },
  Icons: {
    name: 'Icons',
    path: `/Icons`,
    component: (props) => <Icons {...props} />,
  },
  Animations: {
    name: 'Animations',
    path: `/Animations`,
    component: (props) => <Animations {...props} />,
  },
  Grids: {
    name: 'Grids',
    path: `/Grids`,
    component: (props) => <Grids {...props} />,
  },
  Cards: {
    name: 'Cards',
    path: `/Cards`,
    component: (props) => <Card {...props} />,
  },
  Layouts: {
    name: 'Layouts',
    path: `/Layouts`,
    component: (props) => <Layouts {...props} />,
  },
  Nav: {
    name: 'Nav',
    path: `/Nav`,
    component: (props) => <Nav {...props} />,
    // component: (props) => <NavOriExample {...props} />,
  },
  Tailwind: {
    name: 'Tailwind',
    path: `/Tailwind`,
    component: (props) => <Tailwind {...props} />,
  },
}


function App() {
  return (
      <BrowserRouter>
        <nav>
          {Object.values(appRoutes).map((route, i) =>
              <Link key={'Link' + i} to={route.path}> {route.name}</Link>
          )}
          <br/>
          <br/>
        </nav>
        {renderSwitch(appRoutes)}
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
