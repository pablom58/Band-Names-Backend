const expressServer = require('./server')
const { PORT } = require('./config')

const server = require('http').createServer(expressServer)
const io = require('socket.io')(server)

const Sockets = require('./sockets')

Sockets(io)

server.listen(PORT, () => console.log(`Server on port: ${PORT}`))
