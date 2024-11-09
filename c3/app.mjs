import  express  from 'express'

const app = express()
const port = 3000

app.use(express.json())

let tasks = []

app.get('/', (req, res) => {
    res.send('Salu22')
})

app.get("/tasks", (req, res) => {
    res.json(tasks)
})

app.post("/tasks", (req, res) => {
    const { title, description} = req.body

    if (!title || !description) {
        return res.status(400).json({error:"titulo y descripcion no encontrados"})
    }

    const newTask = {
        id: tasks.length + 1,
        title,
        description,
        completed: false
    }

    tasks.push(newTask)
    
    res.status(201).json(newTask)
})

app.put("/tasks/:id", (req, res) => {
    const { id } = req.params
    const { title, description, completed } = req.body

    const task = tasks.find(t => t.id === parseInt(id))

    if (!task) {
        return res.status(404).json({ error: "Tarea no encontrada" })
    }
    if (title !== undefined) task.title = title
    if (description !== undefined) task.description = description
    if (completed !== undefined) task.completed = completed

    res.json(task)
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

//  curl -X POST http://localhost:3000/tasks -H "Content-Type: application/json" -d "{\"title\": \"vender\", \"description\": \"vender el cafe\"}"

// curl -X PUT http://localhost:3000/tasks/1 -H "Content-Type: application/json" -d "{\"title\": \"Comprar pan\", \"completed\": true}"

//  curl -X DELETE http://localhost:3000/tasks/1

