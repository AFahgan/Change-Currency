/* eslint-disable linebreak-style */
/* eslint-disable semi */
const http = require('http')

const router = require('./router')

const server = http.createServer(router)
const PORT = process.env.PORT || 4000
const host = process.env.host || 'localhost'
server.listen(PORT)
// eslint-disable-next-line no-console
console.log(`server runing : http://${host}:${PORT}`)
