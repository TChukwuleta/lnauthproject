const routes = require('./src/routes')
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { responseError } = require('./src/helpers/response')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((err, req, res, next) => {
    if(err) {
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        responseError(res, 500, err.message);
    }
})

app.use('/', routes)
const io = require('socket.io')(server)
let emitSocketEvent
io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('disconnect', () => {
        console.log("User disconnected")
    })

    emitSocketEvent = socket
})

module.exports = {
    emitSocketEvent,
    server
}