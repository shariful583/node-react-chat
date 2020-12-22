const mongoose = require('mongoose');

const Message = new mongoose.Schema({
        ChatRoom: {
            type: mongoose.Schema.Types.ObjectId,
            required: 'Chatroom is required',
            ref: 'ChatRoom'
        },
        User: {
            type: mongoose.Schema.Types.ObjectId,
            required: 'User is required',
            ref: 'User'
        },
        message:{
            type: String,
            required: 'Message is required'
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Message', Message);