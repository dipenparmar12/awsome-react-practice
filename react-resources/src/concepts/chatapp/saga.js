import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { all, takeLatest } from 'redux-saga/effects'
import { rootReducer } from './ChatSlice'

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  // yield all([takeLatest(googleLoginSuccess.type, googleLogin)])
  // yield all([takeLatest(googleLogoutSuccess.type, googleLogout)])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export default function ReduxStoreSagaProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
