import React from 'react'
import { Provider } from 'react-redux'
import axios from 'axios'
import createSagaMiddleware from 'redux-saga'
import { createSlice, configureStore, getDefaultMiddleware, createAction } from '@reduxjs/toolkit'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { combineReducers } from 'redux'
import GoogleLoginForm from './GoogleLoginForm'

const API = 'http://localhost:4001'
axios.interceptors.request.use(
  (config) => {
    const { origin } = new URL(config.url)
    const allowedOrigins = [API]
    const token = localStorage.getItem('token')
    if (allowedOrigins.includes(origin)) {
      config.headers.Authorization = `Bearer ${token}`
    }
    // console.log('GoogleLogin.js::[19] config', config)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    currentUser: {},
    isAuthenticated: false,
    error: '',
    loading: true,
  },
  reducers: {
    loading: (state) => {
      state.loading = true
    },

    loginSuccess: (state, { payload }) => {
      state.currentUser = payload
      state.isAuthenticated = true
      state.loading = false
    },

    loginError: (state, { payload }) => {
      state.error = payload
      state.isAuthenticated = false
      state.loading = false
    },

    logoutSuccess: (state) => {
      state.isAuthenticated = false
      state.currentUser = {}
      state.error = ''
      state.loading = false
    },
  },
})
export const { loading, loginSuccess, loginError, logoutSuccess } = authSlice.actions
export const googleLoginSuccess = createAction('auth/google/success')

const rootReducer = combineReducers({
  authState: authSlice.reducer,
})

function* googleLogin({ payload }) {
  const createOrLogin = (payload) => axios.post(`${API}/google_login`, payload)
  // const getAuth = () => axios.get(`${API}/user`)

  try {
    yield put(loading())
    yield console.log('GoogleLogin.js::[49] googleLogin', payload)
    const { data = null } = yield call(createOrLogin, payload)
    console.log('GoogleLogin.js::[61] res', data)
    yield localStorage.setItem('token', data?.token)
    const { user } = data
    yield put(loginSuccess({ ...user }))

  } catch (err) {
    console.log('GoogleLogin.js::[50] err', err)
  }
}

// If any of these functions are dispatched, invoke the appropriate saga
function* rootSaga() {
  yield all([takeLatest(googleLoginSuccess.type, googleLogin)])
}

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
  devTools: process.env.NODE_ENV !== 'production',
})

sagaMiddleware.run(rootSaga)

export function ReduxStoreSagaProvider({ children }) {
  return <Provider store={store}>{children}</Provider>
}

export default function GoogleLogin() {

  return (
    <ReduxStoreSagaProvider>
      <GoogleLoginForm />
    </ReduxStoreSagaProvider>
  )
}
