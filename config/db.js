const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = async () =>{
    await mongoose.connect(process.env.DB_CONNECT);
    console.log('connected to mongodb');
}
module.exports = {
    connectDB
}
