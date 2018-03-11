const port = 3003

const cors = require('./cors')
const bodyParser = require('body-parser')
const express = require('express')
const queryParser = require('express-query-int')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

server.listen(port, function(){
	console.log(`BACKEND is running in port ${port}`)
})

module.exports = server