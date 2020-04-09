'use strict'

const Hapi = require('@hapi/hapi')
const Router = require('./Routes/Router')
const displayColors = true
// set host and port
const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
        cors: true
    }
})
const http = async () => {
    // start server
    try {
        await server.route(Router)
        await server.start()
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
    console.info(displayColors ? "\x1b[32m%s\x1b[0m" : "%s", `Server running at ${server.info.uri}`)
}
http()