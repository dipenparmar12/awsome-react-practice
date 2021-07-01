import React from 'react'
import ChatApp from './ChatApp'
import ChatReduxStore from './saga'
import WebSocketContext from './WebSocketContext'

export default function ChatApplication(props) {
  return (
    <ChatReduxStore>
      <WebSocketContext>
        <ChatApp {...props} />
      </WebSocketContext>
    </ChatReduxStore>
  )
}
