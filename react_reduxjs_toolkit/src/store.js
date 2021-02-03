import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { combineReducers, configureStore, createSlice } from '@reduxjs/toolkit'
//
import App from './App'
import SalaryContainer from './view/salary/SalaryContainer'
import './css/appStyles.css'


const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
})

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
})

const store = configureStore({
  reducer: rootReducer,
})


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
    	<h1> hello </h1>
    </Provider>
  </HashRouter>,
  document.getElementById('root')
)
