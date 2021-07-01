import React, { useRef } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Spacer } from '../../styled-components/index'
import { roomCreateReq, roomJoinReq, rootExitReq } from './ChatSlice'
import { useWebSocket } from './WebSocketContext'

const mapStateToProps = (state) => ({
  chat: state.chat,
})
const mapDispatchToProps = (dispatch) => ({})

function ChatApp({ chat }) {
  // const dispatch = useDispatch()
  // React.useEffect(() => {
  //   console.log('ChatApp.js::[22]')
  //   dispatch(getSocketEventsReq())
  // }, [dispatch])

  return (
    <Center>
      <Spacer top={'30px'} />
      {chat?.roomId ? <ChatRoom /> : <CreateRoom />}

      <br />
    </Center>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp)

function CreateRoom() {
  const roomNameRef = React.useRef('')
  const usernameRef = React.useRef('')
  const roomIdRef = React.useRef('')
  const dispatch = useDispatch()

  const createRoom = () => {
    dispatch(
      roomCreateReq({
        roomName: usernameRef.current?.value,
        username: usernameRef.current?.value,
      })
    )
  }

  const joinRoom = () => {
    roomIdRef.current?.value &&
      dispatch(
        roomJoinReq({
          username: usernameRef.current?.value,
          roomId: roomIdRef.current?.value,
        })
      )
  }

  return (
    <>
      <h4>Join rooom</h4>
      <div>
        <Input
          type='text'
          ref={usernameRef}
          onChange={(e) => (usernameRef.current.value = e.target.value)}
          defaultValue='dipen'
          placeholder='your name'
        />
        <Input
          type='text'
          ref={roomIdRef}
          onChange={(e) => (roomIdRef.current.value = e.target.value)}
          defaultValue='8f077fc4-1926-267e-599a-384791278bea'
          placeholder='room id'
        />
        <Button onClick={joinRoom}>Join room</Button>
      </div>

      <br />
      <br />

      <h4>Create rooom name</h4>
      <div>
        <Input
          type='text'
          ref={usernameRef}
          onChange={(e) => (usernameRef.current.value = e.target.value)}
          defaultValue='dipen'
          placeholder='your name'
        />
        <Input
          type='text'
          ref={roomNameRef}
          onChange={(e) => (roomNameRef.current.value = e.target.value)}
          defaultValue='testRoom'
          placeholder='room name'
        />
        <Button onClick={createRoom}>Create room</Button>
      </div>
    </>
  )
}

function ChatRoom() {
  const massageRef = useRef('')
  const chatState = useSelector((state) => state.chat)
  const chats = useSelector((state) => state.chat.chats)
  const dispatch = useDispatch()
  const ws = useWebSocket()

  // React.useEffect(() => {
  //   console.log('ChatApp.js::[88]', chats)
  // }, [])

  const msgSend = () => {
    ws.sendMessage(massageRef.current.value)
    massageRef.current.value = null
  }

  return (
    <>
      <h3>
        {chatState?.username}

        <ChatRoomStyled>
          <div className='history'>
            {chats.length &&
              chats.map((chat, i) => (
                <div
                  key={i + Math.random()}
                  className={chat.username === chatState.username ? 'me' : ''}
                >
                  {chat.username !== chatState.username && (
                    <i>{chat.username}:</i>
                  )}
                  {chat.message}
                </div>
              ))}
          </div>
          <div className='control'>
            <input
              type='text'
              ref={massageRef}
              onChange={(e) => (massageRef.current.value = e.target.value)}
              onKeyPress={(e) => (e.key === 'Enter') && msgSend()}
            />
            <button onClick={msgSend}>Send</button>
          </div>
        </ChatRoomStyled>

        <Button onClick={() => dispatch(rootExitReq())} bg='#f2f2f2'>
          Exit room
        </Button>
      </h3>
    </>
  )
}

/* 
========================================================
  Styles
======================================================== 
*/
const Center = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Input = styled.input`
  padding: 7px 10px;
  min-width: 300px;
  font-size: 22px;
  margin-bottom: 5px;
`

const Button = styled.button`
  background-color: ${({ bg = 'initial' }) => bg};
  padding: 10px 35px;
  margin-top: 10px;
  box-shadow: 0 3px 6px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 20px;
`

const ChatRoomStyled = styled.div`
  background-color: lightblue;
  min-width: 600px;
  width: auto;
  display: flex;
  flex-flow: column;
  border-radius: 10px;
  overflow: hidden;

  .history {
    padding: 16px 20px;
    height: 170px;
    font-weight: normal;
    overflow-y: scroll;
    font-size: 17px;

    .me {
      text-align: right;
    }
  }

  .control {
    display: flex;

    input {
      flex: 1;
      padding: 5px 10px;
      font-size: 20px;
      border-radius: 5px 0 0 10px;

      &:focus {
      }
    }

    button {
      padding: 10px 30px;
      border-radius: 5px;
      border: none;

      &:active {
        background-color: lightgray;
      }
    }
  }
`
