const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'Must provide a name'],
        trim: true,
    },
    email:{
        type: String,
        required: [true, 'Must provide an email'],
        trim: true,
    },
    password:{
        type: String,
        required: [true, 'Must provide a password'],
    },
    // weight:{
    //     type: Number,
    //     required: [true, 'Must provide a weight'],
    // },
    // height:{
    //     type: Number,
    //     required: [true, 'Must provide a height'],
    // },
    // age:{
    //     type: Number,
    //     required: [true, 'Must provide an age'],
    // },
    routines:{
        type: Array,
        default: []
    },
    userID:{
        type: Number,
        default: 0
    }
},{collection: 'Users'})

module.exports = mongoose.model('User', PersonSchema);