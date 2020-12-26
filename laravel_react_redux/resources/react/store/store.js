import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import usersReducer from "../views/users/usersReducer";

// console.log("store.js::getDefaultMiddleware", getDefaultMiddleware());
const appMiddlewares = [];

export const rootReducer = combineReducers({
    users: usersReducer
    // auth: {},
    // ui: {},
});

export default () =>
    configureStore({
        reducer: rootReducer
    });
