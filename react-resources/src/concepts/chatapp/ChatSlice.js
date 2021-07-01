/* 
  current user
  current room

*/

import { combineReducers, createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  room: {},
  roomId: null,
  username: null,
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    roomCreateSuccess: (state, { payload }) => {
      state.room = payload?.roomName
      state.username = payload?.username
    },
    roomJoinSuccess: (state, { payload }) => {
      console.log('ChatSlice.js::[22] payload', payload)
      state.roomId = payload?.roomId
    },
    roomExitSuccess: (state, { payload }) => {
      state.roomId = null
      state.room = null
      state.username = null
    },
    // methodName: (state, { payload }) => {},
  },
})

export const { roomCreateSuccess, roomJoinSuccess, roomExitSuccess } =
  chatSlice.actions
export const roomCreateReq = createAction('chat/room/creqteReq')
export const roomJoinReq = createAction('chat/room/joinReq')
export const rootExitReq = createAction('chat/room/exitReq')

export const rootReducer = combineReducers({
  chat: chatSlice.reducer,
})
