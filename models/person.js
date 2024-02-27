const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    username:{
        type: String, // type determines the variable type
        required: [true, 'Must provide a name'], // required determines if the peice of data is required for the data entry or not
        trim: true, // trim will remove whitespace from start and end the string
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