import { applyMiddleware, compose,createStore } from "redux";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
//
import rootReducer from "./rootReducer";
const initialState = {};

// # devTools
// const store = createStore(rootReducer, composeWithDevTools())

// # redux-thunk (async Middleware)
// +Redux Dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
