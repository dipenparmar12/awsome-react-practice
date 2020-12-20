import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
const initialState = {}

// export default createStore(rootReducer,initialState,applyMiddleware(thunk))

// +Redux Dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
