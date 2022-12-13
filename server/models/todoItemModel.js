//import mongoose to create new Schema
const mongoose = require("mongoose");

//create Schema
const { Schema } = mongoose;

const TodoItemSchema = new Schema({
    item:{
        type: String,
        required: true
    },
    user_id:{
        type: String,
        required: true
    }
})

//export this Schema
module.exports = mongoose.model('Todo', TodoItemSchema)