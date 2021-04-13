import React from 'react'
import socketIOClient from 'socket.io-client'

const PORT = 4001
const SERVER_URL = `http://localhost:${PORT}`

const WebSocket = () => {
  const [response, setResponse] = React.useState('')

  React.useEffect(() => {
    const socket = socketIOClient(SERVER_URL)
    socket.on('TEST_INIT', (data) => {
      console.log('WebSocket.js::[13] data', data)
      setResponse(data)
    })
    // CLEAN UP THE EFFECT
    return () => socket.disconnect()
  }, [])

  return (
    <div>
      <p>
        It's Webserver: <time dateTime={response}>{response}</time>
      </p>
    </div>
  )
}

export default WebSocket

/* Server
--------------------------
------installation
--------------------------
yarn add express socket.io
yarn add -D nodemon
package.json -> "server": "nodemon index.js"

--------------------------
------Node server
--------------------------
// index.js
const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

// app setup
const port = process.env.PORT || 4001
const app = express()
const server = http.createServer(app)

// Web socket
const io = socketIo(server, { cors: { origin: '*' } })

io.on('connection', (socket) => {
  socket.emit('TEST_INIT', ' Welcome User, From websocket server' + new Date())

  // disconnect
  socket.on('disconnect', () => {
    console.log('Client disconnected:', new Date())
  })
})

/// start server
server.listen(port, () => console.log(`listening on *:${port}`))

*/
