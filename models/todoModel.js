const mongoose = require("mongoose")


const schema = new mongoose.Schema(
    {
        title: String,
        description: String,
        completed: Boolean
    },
    {
        versionKey: false,
        timestamps: true
    }
)


const todoModel = mongoose.model("todo", schema)


module.exports = todoModel