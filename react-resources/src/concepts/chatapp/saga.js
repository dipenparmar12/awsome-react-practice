import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import axios from 'axios'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  roomExitSuccess,
  roomCreateSuccess,
  roomCreateReq,
  rootExitReq,
  rootReducer,
  roomJoinReq,
  roomJoinSuccess,
} from './ChatSlice'

const API = 'http://localhost:4001'

function* roomCreateSaga({ payload, type }) {
  try {
    const roomApi = (reqData) => axios.post(`${API}/chat/room`, reqData)
    // const {roomName, username} = payload
    const { data: resData = null } = yield call(roomApi, payload)
    yield put(roomCreateSuccess({ ...resData }))
  } catch (err) {
    console.log('saga.js::[10] ___roomCreateSaga:::', err)
  }
}

function* roomJoinSaga({ payload, type }) {
  const roomApi = (id) => axios.get(`${API}/chat/room/${id}`)
  try {
    // const {roomName, username} = payload
    const { data: resData = null } = yield call(roomApi, payload?.roomId)
    // console.log('saga.js::[34] resData', resData)
    yield put(roomJoinSuccess({ ...resData }))
  } catch (err) {
    console.log('saga.js::[10] err', err)
  }
}

function* roomExitSaga({ payload, type }) {
  try {
    yield put(roomExitSuccess())
  } catch (err) {
    console.log('saga.js::[10] err', err)
  }
}

function* rootSaga() {
  yield all([takeLatest(roomCreateReq.type, roomCreateSaga)])
  yield all([takeLatest(roomJoinReq.type, roomJoinSaga)])
  yield all([takeLatest(rootExitReq.type, roomExitSaga)])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export default function ChatReduxStore({ children }) {
  return <Provider store={store}>{children}</Provider>
}
