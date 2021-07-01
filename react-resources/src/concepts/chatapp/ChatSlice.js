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
    joinRoom: (state, { payload }) => {
      state.room = payload?.roomName
      state.username = payload?.username
    },
    // methodName: (state, { payload }) => {},
  },
})

export const { joinRoom } = chatSlice.actions
export const joinRoomReq = createAction('chat/room/Req')

export const rootReducer = combineReducers({
  chat: chatSlice.reducer,
})
