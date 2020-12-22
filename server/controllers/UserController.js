const User = require('../models/User');
const jwt = require('jsonwebtoken');

const { generatePassword, verifyPassword } = require('../util/crypto');

exports.login = async (req,res) => {
    const { email, password } = req.body;

    const user = await User.findOne({email, password: generatePassword(password)});

    if(user) {
        let token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: {
                name: user.name,
                email: user.email,
                id: user.id
            }
        }, 'soboz');

        res.json({
            message: 'Succesfully logged in',
            user: user,
            token: `${token}`
        });
    } else {
        res.json({
            message: 'Email or password is wrong'
        });
    }
};

exports.register = async (req,res) => {
    const { name, email, password } = req.body;
    const user = new User({name, email, password: generatePassword(password)});
    const regUser = await user.save();


    res.json({
        message: 'Account succesfully created',
        user: regUser
    });

};

exports.userList = async(req, res) => {
    const allUser = await User.find();

    res.json({
        message: 'User List',
        user: allUser
    });

}