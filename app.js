const express = require("express")
const cors = require("cors")
const config = require("./config")
const loaders = require("./loaders")

const { TodoRoutes } = require("./routes/index")
const app = express()
config()
loaders()
app.use(express.json())
app.use(cors())

app.listen(process.env.APP_PORT, () => {
    console.log(`Server running at ${process.env.APP_PORT}`)
    app.use("/todos", TodoRoutes)
})