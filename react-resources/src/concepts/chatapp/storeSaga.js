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
  chatLogReceived,
  chatLogReceivedSuccess,
  // getSocketEventsReq,
  // getSocketEventsSuccess,
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
  try {
    const roomApi = ({ roomId, username }) =>
      axios.get(`${API}/chat/room/${roomId}?username=${username}`)

    const { data: resData = null } = yield call(roomApi, payload)
    yield put(roomJoinSuccess({ ...resData }))
  } catch (err) {
    console.log('saga.js::[10] ERROR roomJoinSaga', err)
  }
}

function* roomExitSaga({ payload, type }) {
  try {
    yield put(roomExitSuccess())
  } catch (err) {
    console.log('saga.js::[10] ERROR roomExitSaga', err)
  }
}

function* chatLogReceivedSaga({ payload }) {
  try {
    // payload = { message, username, roomId }
    yield put(chatLogReceivedSuccess(payload))
  } catch (err) {
    console.log('saga.js::[10] ERROR chatLogReceivedSaga', err)
  }
}

function* rootSaga() {
  // yield all([takeLatest(getSocketEventsReq.type, getSocketEventsSaga)])
  yield all([takeLatest(roomCreateReq.type, roomCreateSaga)])
  yield all([takeLatest(roomJoinReq.type, roomJoinSaga)])
  yield all([takeLatest(rootExitReq.type, roomExitSaga)])
  yield all([takeLatest(chatLogReceived.type, chatLogReceivedSaga)])
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

// function* getSocketEventsSaga() {
//   try {
//     const roomApi = () => axios.get(`${API}/chat/events`)
//     const { data: resData = {} } = yield call(roomApi)
//     yield put(getSocketEventsSuccess({ ...resData.socketEvents }))
//   } catch (err) {
//     console.log('saga.js::[10] err', err)
//   }
// }
