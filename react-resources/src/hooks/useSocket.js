import React from 'react'
import socketIOClient from 'socket.io-client'

const useSocket = () => {
  const [socket, setSocket] = React.useState(null)
  const PORT = 4001
  const SERVER_URL = `http://localhost:${PORT}`

  React.useEffect(() => {
    setSocket(socketIOClient(SERVER_URL))
  }, [])

  React.useEffect(() => {
    if (socket) {
      // Test BroadCast
      socket.on('TEST_INIT', (data) => {
        console.log('WebSocket.js::[13] data', data)
      })
      // CLEAN UP THE EFFECT
      return () => socket.disconnect()
    }
  }, [socket])

  return socket
}

export default useSocket
