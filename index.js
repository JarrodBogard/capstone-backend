const express = require("express")
const app = express()
const clientsRouter = require("./routes/clients")
const contactsRouter = require("./routes/contacts")
const addressRouter = require("./routes/address")
const projectsRouter = require("./routes/projects")
const materialsRouter = require("./routes/materials")
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/clients", clientsRouter)
app.use("/contacts", contactsRouter)
app.use("/address", addressRouter)
app.use("/projects", projectsRouter)
app.use("/materials", materialsRouter)

app.get("/", (req, res) => {
    res.send("Herro")
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))