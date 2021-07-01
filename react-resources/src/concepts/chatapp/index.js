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

/* 
========================================================
  Src: https://www.pluralsight.com/guides/using-web-sockets-in-your-reactredux-app
  Github: https://github.com/ManZzup/plguides/tree/master/11-using-websockets-in-your-react-redux-app
======================================================== 
*/