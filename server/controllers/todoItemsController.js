const mongoose = require('mongoose')
//import todo model
const TodoItems = require('../models/todoItemModel')

// get all todoItems
const getTodoList = async (req, res) => {
    try {
        // const user_id = req.user._id
        const todoList = await TodoItems.find({/* user_id */}).sort({ createdAt: 1 });

        res.status(200).json(todoList)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
};

// get a single todoItem
const getTodoItem = async (req, res) => {
    const { id } = req.params
  
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such todo item'})
    }
  
    const todoItem = await TodoItems.findById(id)
  
    if (!todoItem) {
      return res.status(404).json({error: 'No such todo item'})
    }
  
    res.status(200).json(todoItem)
  }

// create a new todoItem
const createTodoItem = async (req, res) => {
    const { item } = req.body

    // add doc to the database
    try {
        // const user_id = req.user._id
        const newTodoItem = await TodoItems.create({ item /*, user_id */ })
        res.status(200).json(newTodoItem)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
};

// update a todoItem
const updateTodoItem = async (req, res) => {
    const { id } = req.params
    
    const updateItem = await TodoItems.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if (!updateItem){
        return res.status(400).json({error: 'No such todoItem'})
    }
    res.status(200).json(updateItem)
};

// delete a todoItem
const deleteTodoItem = async (req, res) => {
    const { id } = req.params
    try {
        const deleteItem = await TodoItems.findOneAndDelete({_id: id});
        res.status(200).json(deleteItem)
    } catch (err) {
        res.status(400).json({err: err.message})
    }
};

module.exports = {
    getTodoList,
    getTodoItem,
    createTodoItem,
    updateTodoItem,
    deleteTodoItem
  }