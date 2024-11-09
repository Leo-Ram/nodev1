const { createServer } = require( "node:http")

const hostname = "127.0.0.1"
const port = 3000;

let server = createServer((req,res) => {
    res.statusCode = 200
    res.setHeader("Content_Type", "tect/plain")
    res.end("Salu2")
})

server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})