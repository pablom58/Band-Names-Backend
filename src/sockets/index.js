const BandCrud = require('./BandCrud')

module.exports = io => {
    io.on('connection', socket => {
        console.log(`Client connected: ${socket.id}`)
        BandCrud(socket , io)     
    })    
}