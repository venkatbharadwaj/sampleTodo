const { createTodoValidation } = require('../validation/todo');
const createTodo = async (req, res) => {
    try {
        await createTodoValidation(req.body);
        const todoObj = new Todo({ title: req.body.title, userId: req.user._id });
        const todo = await todoObj.save();
        console.log('ssee this')
        res.send({ todo });
    } catch (error) {
        res.status(500).send(error.message || error);
        return;
    }
};
const getAllTodos = async (req, res) => {
    try {
        console.log('hello@')
        const userId = req.user._id
        const queryObj = { userId };
        console.log('hello')
        const todoList = await Todo.find(queryObj);
        console.log('hello1')
        res.send(todoList)
    } catch (error) {
        console.log('@',error)
        res.status(500).send(error.message || error);
        return;
    }
};
const deleteTodo = async (req, res) => {
    try {
        const isDeleted = true;
        const todo = await Todo.findByIdAndUpdate(req.params.id, { $set: { isDeleted: isDeleted } }, { new: true })
        res.json(todo);
    } catch (err) {
        res.status(500).send(error.message || error);
        return;
    }
};
exports.createTodo = createTodo;
exports.getAllTodos = getAllTodos;
exports.deleteTodo = deleteTodo;
