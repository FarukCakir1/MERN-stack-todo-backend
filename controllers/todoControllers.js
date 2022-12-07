const { read, create, update, remove } = require("../services/todoServices")
const httpstatus = require("http-status")


const getData = async (req, res) => {
    try {
        const response = await read()
        res.status(httpstatus.OK).send(response)    
    } catch (error) {
        res.status(httpstatus.INTERNAL_SERVER_ERROR).send(error)
    }  
}

const insertData = async (req, res) => {
    const todo = req.body
    try {
        const response = await create(todo)
        res.status(httpstatus.OK).send(response)
    } catch (error) {
        res.status(httpstatus.INTERNAL_SERVER_ERROR).send(error)
    }
}

const updateData = async (req, res) => {
    const id = req.params.id
    const completed = req.body.completed
    console.log(id, completed)
    try {
        const response = await update(id, completed)
        res.status(httpstatus.OK).send(response)
    } catch (error) {
        res.status(httpstatus.INTERNAL_SERVER_ERROR).send(error)
    }
}

const removeData = async (req, res) => {
    const id = req.params.id
    try {
        const response = await remove(id)
        res.status(httpstatus.OK).send(response)
    } catch (error) {
        res.status(httpstatus.INTERNAL_SERVER_ERROR).send(error)
    }
}


module.exports = {
    getData,
    insertData,
    updateData,
    removeData
}