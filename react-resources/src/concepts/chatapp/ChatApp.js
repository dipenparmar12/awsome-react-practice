import React from 'react'
import styled from 'styled-components'
import { Spacer } from '../../styled-components/index'
import ReduxStoreSagaProvider from './saga'

export default function ChatApp() {
  const roomNameRef = React.useRef('')
  const usernameRef = React.useRef('')

  const enterRoom = (e) => {
    console.log('ChatApp.js::[8] roomNameRef', roomNameRef.current?.value)
    console.log('ChatApp.js::[8] usernameRef', usernameRef.current?.value)
  }

  return (
    <ReduxStoreSagaProvider>
      <Center>
        <Spacer top={'30px'} />
        <h4>Enter rooom name</h4>
        <Input type='text' ref={usernameRef} defaultValue='dipen' />
        <Input type='text' ref={roomNameRef} defaultValue='room1' />
        <Button onClick={enterRoom}>Join room</Button>

        <br />
        <br />

        {/*  */}
      </Center>
    </ReduxStoreSagaProvider>
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
