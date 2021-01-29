const crypto = require('crypto');
// const { pass } = require('../database/database');

exports.generatePassword = (password) => {
    return crypto.scryptSync(password, 'salt', 12);
};

exports.verifyPassword = (typePassword, storePassword) => {
    console.log(typePassword, storePassword)
    const verify = crypto.createVerify('SHA256');
    console.log(verify.verify(storePassword, typePassword))
    return verify.verify(typePassword, storePassword);
};