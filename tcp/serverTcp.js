const net = require('net')
const HOST = '127.0.0.1'
const PORT = 3000

console.log('server is running on port ' + PORT)

const server = net.createServer(socket => {
  const client = socket.remoteAddress + ':' + socket.remotePort
  console.log('conected to ' + client)

  socket.on('data', data => {
    console.log('--------------')
    console.log(data.toString())
    console.log('--------------')
    socket.write('Hello Client!')
  })

  socket.on('end', () => {
    console.log('client disconnected')
  })
})

// server.on('connection', socket => {
// })

server.listen(PORT, HOST)
