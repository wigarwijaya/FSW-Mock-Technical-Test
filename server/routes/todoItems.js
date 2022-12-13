const express = require('express');
const router = express.Router();
const { getTodoList, getTodoItem, createTodoItem, updateTodoItem, deleteTodoItem } = require("../controllers/todoItemsController")

//create route -- get data from database
router.get("/items", getTodoList)

//create route -- get a single data from database
router.get('/:id', getTodoItem)

//create route -- add todo item to our database
router.post("/item", createTodoItem)

//create route -- update data from database
router.patch("/item/:id", updateTodoItem)

//create route -- update data from database
router.delete("/item/:id", deleteTodoItem)

//export router
module.exports = router;