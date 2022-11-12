const express = require('expresss');
const routes = express.Router()

server.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})

module.exports = routes;