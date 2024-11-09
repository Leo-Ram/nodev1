import express from "express"

const app = express()
const port = 3000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Salu23 escribe horario")
})

let horario =[
    {
        id: "1",
        dia: "lunes",
        actividad: "escribir informe",
    }
]
app.get("/horario", (req, res) => {
    res.json(horario)
})

app.post("/horario", (req, res) => {
   // console.log("-----req.body-------", req.body)
    try {
        if (!req.body.dia || !req.body.actividad) {
            res.status(400).json({ message: "Falta dia o actividad" })
            return
        }
        req.body.id = (horario.length +1 ).toString()
/*        let nuevoHorario = {
            id: (horario.length + 1).toString(),
            dia: req.body.dia,
            actividad: req.body.actividad,
        }

        horario.push(nuevoHorario)
        res.status(200).json(nuevoHorario)
*/      
        horario.push(req.body)
        res.status(200).json(req.body)
    } catch (error) {
        res.status(500).json({
            error: "no se puede procesar",
            message: error.message
        })
    }
})

app.put("/horario/:id", (req, res) => {
    
    const { id } = req.params
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

// curl -X POST http://localhost:3000/horario -H "Content-Type: application/json" -d "{\"dia\": \"martes\",\"actividad\": \"reunión de equipo\"}"