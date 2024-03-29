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

// Root route
app.get('/', (req, res) => {
  res.send({ response: 'Socket.Io  local-server' }).status(200)
})

/* 
========================================================
  Socket IO WebSocket
======================================================== 
*/

// TODO:::MUST be same Client side
const socketEvents = {
  userJoined: 'event://user_joined',
  userLeft: 'event://user_left',
  MSG_GET: 'event://MSG_GET',
  MSG_SEND: 'event://MSG_SEND',
}

const testRoomId = '8f077fc4-1926-267e-599a-384791278bea'

let rooms = {
  [testRoomId]: {
    id: testRoomId,
    name: 'testRoom',
  },
}

let chatLogs = {
  [testRoomId]: [
    {
      username: 'dipen',
      date: new Date(),
      message: '[testRoom] hello world.... dipen',
    },
  ],
}

const io = socketIo(server, { cors: { origin: '*' } })


// io.on('connection', (socket, data) => {
//   socket.emit('TEST_INIT', ' Welcome User, From websocket server' + new Date())

//   socket.on(socketEvents.MSG_SEND, (data) => {
//     console.log('chatServer.js::[73] _io', data)
//     data = JSON.parse(data || {})
//     data.date = new Date()
//     chatLogs[data.roomId].push(data)

//     socket.broadcast.emit(socketEvents.MSG_GET, data)
//     // console.log('chatServer.js::[76] chatLogs', chatLogs)
//   })

//   // disconnect
//   socket.on('disconnect', (data) => {
//     console.log('Client disconnected:', new Date())
//   })
// })

io.sockets.on('connection', function (socket) {
  socket.on('create', function (room) {
    // console.log('chatServer.js::[84] room', room)
    socket.join(room)
    socket.on(socketEvents.MSG_SEND, function (msgPayload) {
      socket.broadcast.to(room).emit(socketEvents.MSG_GET, msgPayload)
    })
  })
})

/* 
========================================================
  Server routes chat
======================================================== 
*/
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // To parse the incoming requests with JSON payloads

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
  const username = req.query.username
  const roomId = req.params.roomId

  res.json({
    chats: chatLogs[roomId],
    roomId,
    username,
    ...rooms[roomId],
  })
})

/* 
========================================================
  Server start
======================================================== 
*/
server.listen(port, () => console.log(`listening on *:${port}`))

// Test
// console.log('chatServer.js::req[query,param,body]', req.query, req.params, req.body)
