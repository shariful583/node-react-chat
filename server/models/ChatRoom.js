const mongoose = require('mongoose');

const ChatRoom = new mongoose.Schema({
        name: {
            type: String,
            required: 'Name is required'
        }
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('ChatRoom', ChatRoom);