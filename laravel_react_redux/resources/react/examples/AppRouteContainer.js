import React from "react";
import { Link, NavLink, Route, Switch } from "react-router-dom";

import UsersContainer from "../views/users/UsersContainer";

export default function AppRouteContainer() {
    return (
        <>
            <LinkList />
            <SwitchRoutes />
            {/* <SwitchRoutesDynamic /> */}
        </>
    );
}

export const appRoutes = {
    home: {
        name: "Home",
        path: "/home"
    },
    contact: {
        name: "Contact",
        path: "/contact"
    },
    about_render: {
        name: "About",
        path: "/about",
        render: () => About
    },
    user: {
        name: "user",
        path: "/user",
        component: () => <h2>UserTestComponent not rendred</h2>,
        render: () => <h1> /User Path one </h1>
    },
    users: {
        name: "userContainer",
        path: "/users",
        component: UsersContainer || <h1> UserContainer not found </h1>
    }
};

const LinkList = () => {
    return (
        <ul>
            <li>
                <Link to="/">Root</Link>
            </li>

            {appRoutes &&
                Object.keys(appRoutes).map(key => (
                    <li key={Math.random()}>
                        <NavLink to={appRoutes[key].path}>
                            {appRoutes[key].name}
                        </NavLink>
                    </li>
                ))}
        </ul>
    );
};

const Home = () => <h2>Home</h2>;
function About() {
    console.clear();
    return <h2>About Console Cleared</h2>;
}

const SwitchRoutes = () => {
    return (
        // <HashRouter >
        <Switch>
            {/* If noting was found this route excuted */}
            <Route path="/home">
                <h1> # home </h1>
            </Route>

            {/* Nested component render */}
            <Route exact path={appRoutes.home.path}>
                <Home />
            </Route>

            {/* put component to render */}
            <Route exact path={appRoutes.about_render.path} component={About} />

            {/* Run time JSX */}
            <Route
                exact
                path="/contact"
                render={() => <h3>Direct Contact rendered</h3>}
            />
            {/* Run time JSX  with object path */}
            <Route
                exact
                path={appRoutes.about_render.path}
                render={() => appRoutes.about_render.render}
            />

            {/* Expriment which one is has 1st priority if both `render` and `comonent` is defined */}
            <Route
                exact
                path={appRoutes.user.path}
                render={appRoutes.user.render} // 1st render priority if defined
                component={appRoutes.user.render}
            />

            {/* put component to render */}
            <Route
                exact
                path={appRoutes.users.path}
                component={appRoutes.users.component}
            />

            {/* If noting was found this route excuted */}
            <Route path="/">
                <h1> No match found. </h1>
            </Route>
        </Switch>
        // </HashRouter>
    );
};

// const SwitchRoutesDynamic = () => {
//     return (
//         <Switch>
//             {appRoutes &&
//                 Object.keys(appRoutes).map(key => {
//                     return (
//                         <Route
//                             key={Math.random()}
//                             exact
//                             path={appRoutes[key].path}
//                             component={appRoutes[key].component}
//                         />
//                     );
//                 })}
//         </Switch>
//     );
// };
