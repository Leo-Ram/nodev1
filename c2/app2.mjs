import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Salu22")
})

app.listen(3000, () => {
    console.log ("server listening on http://localhost:3000")
})