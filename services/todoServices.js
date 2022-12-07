const todoModel = require("../models/todoModel")


const read = () => {
    return todoModel.find({})
}

const create = (todo) => {
    const newTodo = new todoModel(todo)

    return newTodo.save()
}

const update = (id, completed) => {
    return todoModel.findByIdAndUpdate(id, {completed: completed ? false : true}, {new:true})
}

const remove = (id) => {
    return todoModel.findByIdAndDelete(id, {new: true})
}

module.exports = {
    read,
    create,
    update,
    remove
}