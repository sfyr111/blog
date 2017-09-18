const net = require('net')
const HOST = '127.0.0.1'
const PORT = 3000

const client = net.connect(PORT, HOST, () => {
  console.log('connect to the server')
  client.write('hello server!')
})

client.on('data', data => {
  console.log('--------------')
  console.log(data.toString())
  console.log('--------------')
  client.end()
})

client.on('end', () => {
  console.log('Server disconnected.')
})
