/* 
  current user
  current room

*/

import { combineReducers, createAction, createSlice } from '@reduxjs/toolkit'

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    room: {},
    roomId: null,
    username: null,
  },
  reducers: {
    roomJoinSuccess: (state, { payload }) => {
      state.room = payload?.roomName
      state.username = payload?.username
    },
    roomExitSuccess: (state, { payload }) => {
      state.room = null
      state.username = null
    },
    // methodName: (state, { payload }) => {},
  },
})

export const { roomJoinSuccess, roomExitSuccess } = chatSlice.actions
export const roomJoinReq = createAction('chat/room/joinReq')
export const rootExitReq = createAction('chat/room/exitReq')

export const rootReducer = combineReducers({
  chat: chatSlice.reducer,
})
