import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useWebSocket } from './WebSocketContext'
import { rootExitReq } from './ChatSlice'
import { Button, ChatRoomStyled } from './styles'

export function ChatRoom() {
  const massageRef = useRef()
  const historyRef = useRef()
  const chatState = useSelector((state) => state.chat)
  const chats = useSelector((state) => state.chat.chats)
  const dispatch = useDispatch()
  const ws = useWebSocket()

  function scrollToBottom() {
    const scrollHeight = historyRef.current.scrollHeight
    const height = historyRef.current.clientHeight
    const maxScrollTop = scrollHeight - height
    historyRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  }

  React.useEffect(() => {
    scrollToBottom()
  })

  const msgSend = () => {
    ws.sendMessage(massageRef.current.value)
    massageRef.current.value = null
  }

  const MessageRender =
    chats.length &&
    chats.map((chat, i) => (
      <div
        key={i + Math.random()}
        className={chat.username === chatState.username ? 'me' : ''}
      >
        {chat.username !== chatState.username && <i>{chat.username}:</i>}
        {chat.message}
      </div>
    ))

  return (
    <>
      <h3>
        {chatState?.username}

        <ChatRoomStyled>
          <div className="history" ref={historyRef}>
            {MessageRender}
          </div>
          <div className="control">
            <input
              type="text"
              ref={massageRef}
              onChange={(e) => (massageRef.current.value = e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && msgSend()}
              defaultValue={new Date()}
            />
            <button onClick={msgSend}>Send</button>
          </div>
        </ChatRoomStyled>

        <Button onClick={() => dispatch(rootExitReq())} bg="#f2f2f2">
          Exit room
        </Button>
      </h3>
    </>
  )
}
