let Store = require('../store')
const Band = require('../store/BandModel')

module.exports = (socket , io) => {
    socket.on('get-bands',() => {
        console.log('here')
        io.emit('get-bands',Store)
    })

    socket.on('add-band',({ name }) => {
        let band = new Band(name)

        Store.push(band)

        io.emit('get-bands',Store)
    })

    socket.on('update-band',data => {
        let newStore = Store.map(band => {
            if(band.id === data.id)
                return {
                    ...band,
                    ...data
                }

            return band
        })

        Store = [...newStore]

        io.emit('get-bands',Store)
    })

    socket.on('vote-band',({ id }) => {
        let newStore = Store.map(band => {
            if(band.id === id)
                return {
                    ...band,
                    votes: band.votes + 1
                }

            return band
        })

        Store = [...newStore]

        io.emit('get-bands',Store)
    })

    socket.on('delete-band',({ id }) => {
        let newStore = Store.filter(band => band.id !== id)

        Store = [...newStore]

        io.emit('get-bands',Store)
    })
}