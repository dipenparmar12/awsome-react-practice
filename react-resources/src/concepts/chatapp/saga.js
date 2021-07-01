import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import axios from 'axios'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { joinRoom, joinRoomReq, rootReducer } from './ChatSlice'

const API = 'http://localhost:4001'

function* joinRoomSaga({ payload, type }) {
  const joinRoomApi = (payload) => axios.post(`${API}/chat/room`, payload)

  try {
    // const {roomName, username} = payload
    const { data: resData = null } = yield call(joinRoomApi, payload)
    yield put(joinRoom({ ...resData }))
  } catch (err) {
    console.log('saga.js::[10] err', err)
  }
}

function* rootSaga() {
  yield all([takeLatest(joinRoomReq.type, joinRoomSaga)])
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
