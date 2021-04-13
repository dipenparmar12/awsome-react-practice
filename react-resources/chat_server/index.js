const express = require('express')
const http = require('http')
const socketIo = require('socket.io')

// app setup
const port = process.env.PORT || 4001
const app = express()
const server = http.createServer(app)

// routes
app.get('/', (req, res) => {
  res.send({ response: 'Socket.Io  local-server' }).status(200)
})

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
