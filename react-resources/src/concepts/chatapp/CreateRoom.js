import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { roomCreateReq, roomJoinReq } from './ChatSlice'
import { Button, Input } from './styles'

export function CreateRoom() {
  const roomNameRef = React.useRef('')
  const usernameRef = React.useRef('')
  const roomIdRef = React.useRef('')
  const dispatch = useDispatch()
  const location = useLocation()
  const queryRef = React.useRef(new URLSearchParams(location.search))

  React.useEffect(() => {
    queryRef.current = new URLSearchParams(location.search)
    usernameRef.current.value = queryRef.current.get('username')
  }, [location])

  const createRoom = () => {
    dispatch(
      roomCreateReq({
        roomName: roomNameRef.current?.value,
        username: usernameRef.current?.value
      })
    )
  }

  const joinRoom = () => {
    roomIdRef.current?.value &&
      dispatch(
        roomJoinReq({
          username: usernameRef.current?.value,
          roomId: roomIdRef.current?.value
        })
      )
  }

  return (
    <>
      <h4>Join rooom</h4>
      <div>
        <Input
          type="text"
          ref={usernameRef}
          onChange={(e) => (usernameRef.current.value = e.target.value)}
          defaultValue={'dipen'}
          placeholder="your name"
        />
        <Input
          type="text"
          ref={roomIdRef}
          onChange={(e) => (roomIdRef.current.value = e.target.value)}
          defaultValue="8f077fc4-1926-267e-599a-384791278bea"
          placeholder="room id"
        />
        <Button onClick={joinRoom}>Join room</Button>
      </div>

      <br />
      <br />

      <h4>Create rooom name</h4>
      <div>
        {/* <Input
          type='text'
          ref={usernameRef}
          onChange={(e) => (usernameRef.current.value = e.target.value)}
          defaultValue={'dipen'}
          placeholder='your name'
        /> */}
        <Input
          type="text"
          ref={roomNameRef}
          onChange={(e) => (roomNameRef.current.value = e.target.value)}
          defaultValue="testRoom"
          placeholder="room name"
        />
        <Button onClick={createRoom}>Create room</Button>
      </div>
    </>
  )
}
