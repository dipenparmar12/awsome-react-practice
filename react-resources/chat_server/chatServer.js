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

/* 
========================================================
  Chats
======================================================== 
*/
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads

// TODO:::MUST be same Client side
const socketEvents = {
  MSG_GET: 'event://MSG_GET',
  MSG_SEND: 'event://MSG_SEND',
}

app.get('/chat/events', (req, res, next) => {
  res.json({
    msg: 'socketEvents',
    socketEvents,
  })
})

const testRoomId = '8f077fc4-1926-267e-599a-384791278bea'

let rooms = {
  [testRoomId]: {
    id: testRoomId,
    name: 'testRoom',
  },
}

let chatLogs = {
  [testRoomId]: {
    dipen: '[testRoom] hello world.... dipen',
    unknown: '[testRoom] hello world....unknown',
  },
}

app.post('/chat/room', (req, res, next) => {
  const { roomName, username } = req.body
  const room = {
    name: roomName,
    id: _uuid(),
  }
  rooms[room.id] = room
  console.log('chatServer.js::[57] rooms', rooms)
  res.json({
    room,
    username,
  })
})

app.get('/chat/room/:roomId', (req, res, next) => {
  const roomId = req.params.roomId
  res.json({
    chats: chatLogs[roomId],
    roomId,
    ...rooms[roomId],
  })
})


/* 
========================================================
  Server start
======================================================== 
*/
server.listen(port, () => console.log(`listening on *:${port}`))
