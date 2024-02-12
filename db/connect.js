// npm install mongoose
const mongoose = require('mongoose');

const connectDB = (url)=>{
    // remember this is temporary and needs to be replaced
    // const connectString = 'mongodb+srv://nsanto591:CA1caiMongo626@cluster0.1qhbbun.mongodb.net/';

    // mongoose.connect(connectString).
    // then(()=>console.log('databse connected successfully')).
    // catch((err=>console.log(err)))

    return mongoose.connect(url);
}

module.exports = connectDB;