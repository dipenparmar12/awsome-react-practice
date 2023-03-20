import {Route, Switch} from 'react-router-dom';
import React from 'react';

export const renderSwitch = (appRoutes) => {
  return <Switch>
    {
      Object.values(appRoutes).map((route, i) =>
          <Route key={'Route' + route.path} exact path={route.path} render={route.component}/>)
    }
  </Switch>
}

/*
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


export const appRoutes = {
  test: {
    name: 'Test',
    path: `/test`,
    component: (props) => <h1 > Test route [Home page] </h1>,
  },
}
*/
