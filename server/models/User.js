const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: 'Name is required'
    },
    email: {
        type: String,
        required: 'Email Is required'
    },
    password: {
        type: String,
        required: 'Password is required'
    }
},
    {
        timestamps: true
    });

module.exports = mongoose.model('User', User);