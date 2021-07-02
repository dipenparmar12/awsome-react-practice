import React from 'react'
import { createContext, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import socketIOClient from 'socket.io-client'
import { updateChatLog } from './ChatSlice'
import { WS_BASE } from './config'

// TODO:::MUST be same server side
const socketEvents = {
  userJoined: 'event://user_joined',
  userLeft: 'event://user_left',
  MSG_GET: 'event://MSG_GET',
  MSG_SEND: 'event://MSG_SEND',
}

export const WpContext = createContext(null)

export default function WpContextProvider({ children }) {
  let socket
  const chatState = useSelector((state) => state.chat)
  const dispatch = useDispatch()

  if (!socket) {
    socket = socketIOClient(WS_BASE)
    // socket = io.connect(WS_BASE)
  }

  React.useEffect(() => {
    socket.on(socketEvents.MSG_GET, (msg) => {
      console.log('WebSocketContext.js::[15] MSG_GET', msg)
    })

    socket.emit('create', chatState.roomId)

    return () => {
      socket.disconnect()
    }
  }, [chatState.roomId, socket])

  const sendMessage = (message) => {
    const payload = {
      message,
      username: chatState.username,
      roomId: chatState.roomId,
    }
    // console.log('WebSocketContext.js::[33] sendMessage', payload)
    socket.emit(socketEvents.MSG_SEND, JSON.stringify(payload || {}))
    // TODO:::dispatch
    dispatch(updateChatLog(payload))
  }

  return (
    <WpContext.Provider value={{ socket, sendMessage }}>
      {children}
    </WpContext.Provider>
  )
}

export function useWebSocket() {
  return useContext(WpContext)
}
