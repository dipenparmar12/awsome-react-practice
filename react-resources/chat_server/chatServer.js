const express = require('express')
const http = require('http')
const socketIo = require('socket.io')
const cors = require('cors')
const _uuid = require('./uuid')

// app setup
const port = process.env.PORT || 4001
const app = express()
const server = http.createServer(app)

// Cors
app.use(cors())

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

/* 
========================================================
  Chats
======================================================== 
*/
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads



let rooms = {}
let chatLogs = {}

app.post('/chat/room', (req, res, next) => {
  const { roomName, username } = req.body
  const room = {
    name: roomName,
    id: _uuid(),
  }

  rooms[room.id] = room

  res.json({
    room,
    username,
  })
})

app.delete('/chat/room', (req, res, next) => {
  res.json({
    msg: 'succes room exit',
  })
})
