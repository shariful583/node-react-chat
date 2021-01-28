const crypto = require('crypto');
// const { pass } = require('../database/database');

exports.generatePassword = (password) => {
    return crypto.scryptSync(password, 'salt', 12);
};

exports.verifyPassword = (typePassword, storePassword) => {
    const verify = crypto.createVerify('SHA256'); 
    return verify.verify(storePassword, typePassword);
};