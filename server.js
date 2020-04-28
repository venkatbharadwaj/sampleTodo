// import express from 'express';
const express = require('express')
const {connectDB} = require('./config/db');
const authRoute = require('./middleware/auth');
const app = express();
const PORT = 5000;
connectDB();
app.use(express.json({extended: false}))
app.listen(PORT, ()=>{console.log(`Port listing to ${PORT}`)});
app.get('/', (req, res)=>{
    res.send(`App is listening and running buddy!`)
})
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/todos', authRoute, require('./routes/api/todo'))