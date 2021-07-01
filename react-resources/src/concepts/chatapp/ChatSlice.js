/* 
  current user
  current room

*/

import { combineReducers, createAction, createSlice } from '@reduxjs/toolkit'

const initialState = {
  room: {},
  roomId: null,
  username: null,
  chats: [], // [ { user, date, msg }, ]
  socketEvnets: {},
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    // getSocketEventsSuccess: (state, { payload }) => {
    //   state.socketEvnets = payload
    // },
    roomCreateSuccess: (state, { payload }) => {
      state.room = payload?.roomName
      state.username = payload?.username
    },
    roomJoinSuccess: (state, { payload }) => {
      state.roomId = payload?.roomId
      state.username = payload?.username
      state.chats = payload?.chats
    },
    roomExitSuccess: (state, { payload }) => {
      state.roomId = null
      state.room = null
      state.username = null
    },

    updateChatLog: (state, { payload }) => {
      state.chats.push(payload)
    },
    // methodName: (state, { payload }) => {},
  },
})

export const {
  roomCreateSuccess,
  roomJoinSuccess,
  roomExitSuccess,
  getSocketEventsSuccess,
  updateChatLog,
} = chatSlice.actions
// export const getSocketEventsReq = createAction('chat/getEventsReq')
export const roomCreateReq = createAction('chat/room/creqteReq')
export const roomJoinReq = createAction('chat/room/joinReq')
export const rootExitReq = createAction('chat/room/exitReq')

export const rootReducer = combineReducers({
  chat: chatSlice.reducer,
})
