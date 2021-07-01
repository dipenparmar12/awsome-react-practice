/* 
  current user
  current room

*/

import { combineReducers, createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'room',
  initialState: {
    room: null,
    user: null,
  },
  reducers: {
    methodName: (state, { payload }) => {},
  },
})

export const rootReducer = combineReducers({
  chat: chatSlice.reducer,
})
