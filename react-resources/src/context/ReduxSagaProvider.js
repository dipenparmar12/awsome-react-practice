import React from 'react'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { all, takeLatest } from 'redux-saga/effects'

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([
    // takeLatest(login.type, loginUser),
  ])
}

const rootReducer = {}
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export function ReduxSagaProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}
