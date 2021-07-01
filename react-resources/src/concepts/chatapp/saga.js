import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import axios from 'axios'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import {
  roomExitSuccess,
  roomJoinSuccess,
  roomJoinReq,
  rootExitReq,
  rootReducer,
} from './ChatSlice'

const API = 'http://localhost:4001'

function* joinRoomSaga({ payload, type }) {
  const joinRoomApi = (payload) => axios.post(`${API}/chat/room`, payload)
  try {
    // const {roomName, username} = payload
    const { data: resData = null } = yield call(joinRoomApi, payload)
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
  yield all([takeLatest(roomJoinReq.type, joinRoomSaga)])
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
