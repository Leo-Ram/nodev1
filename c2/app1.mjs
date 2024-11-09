import { createServer } from "node:http"

const hostname = "localhost"
const port = 3000

const server = createServer(( req, res ) => {
    if ( req.url === "/" && req.method === "GET" ) {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end("<h1>  Salu2</h1> <spam>holaaaa</spam>")
    }else if (req.url === "/info" && req.method === "GET" ) {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end("<h2>Info</h2> <p>Esta es la informacion de la pagina</p>")
    } else {
        res.statusCode = 404
        res.setHeader("Content-Type", "text/html")
        res.end("<h2>Error</h2> <p>Pagina no encontrada</p>")
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});