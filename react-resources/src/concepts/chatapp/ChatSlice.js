/* 
  current user
  current room

*/

import { combineReducers, createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  room: {},
  roomId: null,
  username: null,
  chats: [],
  socketEvnets: {},
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    getSocketEventsSuccess: (state, { payload }) => {
      state.socketEvnets = payload
    },
    roomCreateSuccess: (state, { payload }) => {
      state.room = payload?.roomName
      state.username = payload?.username
    },
    roomJoinSuccess: (state, { payload }) => {
      console.log('ChatSlice.js::[22] payload', payload)
      state.roomId = payload?.roomId
      state.chats = payload?.chats
    },
    roomExitSuccess: (state, { payload }) => {
      state.roomId = null
      state.room = null
      state.username = null
    },
    // methodName: (state, { payload }) => {},
  },
})

export const {
  roomCreateSuccess,
  roomJoinSuccess,
  roomExitSuccess,
  getSocketEventsSuccess,
} = chatSlice.actions
export const getSocketEventsReq = createAction('chat/getEventsReq')
export const roomCreateReq = createAction('chat/room/creqteReq')
export const roomJoinReq = createAction('chat/room/joinReq')
export const rootExitReq = createAction('chat/room/exitReq')

export const rootReducer = combineReducers({
  chat: chatSlice.reducer,
})
