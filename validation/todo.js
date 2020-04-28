const Joi = require('@hapi/joi');
const createTodoValidation = (data) => {
    const todoSchema = Joi.object({
        title: Joi.string().required()
    });
    return todoSchema.validateAsync(data);
}

module.exports = { createTodoValidation }