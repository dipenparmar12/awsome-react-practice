import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { Spacer } from '../../styled-components/index'
import { joinRoomReq } from './ChatSlice'

const mapStateToProps = (state) => ({
  chat: state.chat,
})
const mapDispatchToProps = (dispatch) => ({})

function ChatApp({ chat }) {
  // React.useEffect(() => {
  //   console.log('ChatApp.js::[13]', chat)
  // })
  
  return (
    <Center>
      <Spacer top={'30px'} />
      {chat?.username ? <ChatRoom /> : <CreateRoom />}
      <br />
    </Center>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatApp)

function CreateRoom() {
  const roomNameRef = React.useRef('')
  const usernameRef = React.useRef('')
  const dispatch = useDispatch()
  
  const enterRoom = (e) => {
    dispatch(
      joinRoomReq({
        roomName: roomNameRef.current?.value,
        username: usernameRef.current?.value,
      })
    )
  }

  return (
    <>
      <h4>Enter rooom name</h4>
      <Input type='text' ref={usernameRef} defaultValue='dipen' />
      <Input type='text' ref={roomNameRef} defaultValue='room1' />
      <Button onClick={enterRoom}>Join room</Button>
      {/*  */}
    </>
  )
}

function ChatRoom() {
  const chat = useSelector(state => state.chat)
  return (
    <>
      <h3>
        {chat?.username}
        {/* {room.name} ({room.id}) */}
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
  padding: 7px 30px;
  margin-top: 10px;
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;
`
