import React from 'react'
import {connect} from 'react-redux'
import {Spacer} from '../../styled-components/index'
import {CreateRoom} from './CreateRoom';
import {ChatRoom} from './ChatRoom';
import {Center} from './styles';

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
