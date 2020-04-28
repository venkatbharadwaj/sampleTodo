const TodoModel = require('../../models/Todo')
const todoController = require('../../controller/todo');
const validation = require('../../validation/todo');
const httpMock = require('node-mocks-http');

validation.createTodoValidation = jest.fn();
TodoModel.save = jest.fn();
TodoModel.find = jest.fn();
let req, res, next;
beforeEach(()=>{
    req = httpMock.createRequest();
    res = httpMock.createResponse();
    next = null;
})

describe('This should have a function', ()=>{
    it('should have a method createTodo', ()=>{
        expect(typeof todoController.createTodo).toBe('function');

    });
    it('should call TodoModel.save', () => {
        todoController.createTodo(req,res);
        expect(res.statusCode).toBe(200);

    });
    it.only('should have a method getAllTodos', () => {
        expect(typeof todoController.getAllTodos).toBe('function');
        TodoModel.find.mockReturnValue({tile: "hi"});
        let requestObj = {...req,user:{_id: 1}}
        todoController.getAllTodos(requestObj, res);
        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toStrictEqual({ tile: "hi" });
    });
});