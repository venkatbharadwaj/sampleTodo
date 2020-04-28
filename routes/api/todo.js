/**
 * sets URL and executes the controller
 * @module routes/todos
 */
'use strict';

const express = require('express');
const Todo = require('../../models/Todo');
const todoController = require('../../controller/todo');
const router = express.Router();
/**
 * @function post(/api/todo)
 * creates a Todo
 * @return message and status: 200 - everything is OK, or 500 - error
 */
router.post('/', todoController.createTodo);
/**
 * @function get(/api/todo)
 * gets all todo
 * @return message and status: 200 - everything is OK, or 500 - error
 */
router.get('/', todoController.getAllTodos);
/**
 * @function put(/api/todo/<id>/status)
 * Changes the todo isDeleted to true
 * @return message and status: 200 - everything is OK, or 500 - error
 */
router.put('/:id/remove', todoController.deleteTodo);
module.exports = router;