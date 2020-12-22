const ChatRoom = require('../models/ChatRoom');

exports.createChatRoom = async(req, res) => {
    const {name} = req.body;

    const chatRoom = new ChatRoom({
        name
    });

    try{
        await chatRoom.save();

        res.status(201).json({
            message: 'Room created successfully'
        });
    } catch(error) {
        res.status(404).json({
            message: 'Failed'
        });
    }
};