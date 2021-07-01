import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Spacer } from '../../styled-components/index'
import {
  getSocketEventsReq,
  roomCreateReq,
  roomJoinReq,
  rootExitReq,
} from './ChatSlice'
import { useWebSocket } from './WebSocketContext'

const mapStateToProps = (state) => ({
  chat: state.chat,
})
const mapDispatchToProps = (dispatch) => ({})

function ChatApp({ chat }) {
  const dispatch = useDispatch()

  React.useEffect(() => {
    console.log('ChatApp.js::[22]')
    dispatch(getSocketEventsReq())
  }, [dispatch])

  const ws = useWebSocket()

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
        roomName: roomNameRef.current?.value,
        username: usernameRef.current?.value,
      })
    )
  }

  const joinRoom = () => {
    roomIdRef.current?.value &&
      dispatch(
        roomJoinReq({
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
          ref={roomIdRef}
          defaultValue='8f077fc4-1926-267e-599a-384791278bea'
        />
        <Button onClick={joinRoom}>Join room</Button>
      </div>

      <br />
      <br />

      <h4>Create rooom name</h4>
      <div>
        {' '}
        <Input type='text' ref={usernameRef} defaultValue='dipen' />
        <Input type='text' ref={roomNameRef} defaultValue='testRoom' />
        <Button onClick={createRoom}>Create room</Button>
      </div>
    </>
  )
}

function ChatRoom() {
  const chat = useSelector((state) => state.chat)
  const chats = useSelector((state) => state.chat.chats)
  const dispatch = useDispatch()

  return (
    <>
      <h3>
        {chat?.username}

        <br />
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
