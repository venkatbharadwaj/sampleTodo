const Joi = require('@hapi/joi');
const registerValidation = (data) =>{
    const registerSchema = Joi.object({
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string()
    });
    return registerSchema.validateAsync(data);
}
const loginValidation = (data) => {
    const loginSchema = Joi.object({
        email: Joi.string().min(6).required().email(),
        password: Joi.string().required()
    });
    return loginSchema.validateAsync(data);
}
module.exports = { registerValidation, loginValidation}