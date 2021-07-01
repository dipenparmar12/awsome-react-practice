import { createContext, useContext } from 'react'
import { io } from 'socket.io-client'
import socketIOClient from 'socket.io-client'
import { WS_BASE } from './config'

const socketEvents = {
  MSG_GET: 'event://MSG_GET',
  MSG_SEND: 'event://MSG_SEND',
}


export const WpContext = createContext(null)

export default function WpContextProvider({ children }) {
  let socket

  if (!socket) {
    socket = socketIOClient(WS_BASE)
    // socket = io.connect(WS_BASE)
    socket.on(socketEvents.MSG_GET, (msg) => {
      console.log('WebSocketContext.js::[15] msg', msg)
    })
    // TODO:::dispatch
  }

  const sendMessage = (roodId, msg) => {
    const payload = {
      roodId,
      data: msg,
    }
    socket.emit(socketEvents.MSG_SEND, JSON.stringify(payload))
    // TODO:::dispatch
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
