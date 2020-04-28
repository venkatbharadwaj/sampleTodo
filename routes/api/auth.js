const express = require('express');
const authController = require('../../controller/auth');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello from auth')
});
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
module.exports = router;