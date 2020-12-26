import React from "react";
import AppRouteContainer from "./examples/AppRouteContainer";
import { reactApp } from "./renderApp";

// reactApp(AppRouteContainer)(document.getElementById("react_app_routes"));
// reactApp(UsersContainer)(document.getElementById("react_app_users"))
reactApp(AppRouteContainer)(document.getElementById("react_app_routes"));
