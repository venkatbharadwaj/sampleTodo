const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation/user');

const registerUser = async (req, res) => {
    try {
        console.log('hey')
        await registerValidation(req.body);
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        console.log(`hashPassword: ${hashPassword}`)
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        });
        console.log(`user savede: ${hashPassword}`)

        const savedUser = await user.save();
        console.log(`user saved: ${hashPassword}`)
        res.send(savedUser._id);
    } catch (error) {
        res.status(400).send(error);
    }
};
const loginUser = async (req, res) => {
    // console.log(registerValidation)
    try {
        await loginValidation(req.body);
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            throw new Error('Invalid username or passoword');
        }
        const isValidPass = await bcrypt.compare(req.body.password, user.password);
        if (!isValidPass) {
            throw new Error('Invalid username or passoword');
        }
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_TOKEN)
        res.header('Authorization', token).send({ token })
    } catch (error) {
        res.status(400).send(error.message || error);
    }
}
exports.registerUser = registerUser;
exports.loginUser = loginUser;