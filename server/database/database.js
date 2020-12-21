require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(`DB connection error ${error}`);
});

db.once('open', () => {
    console.log('DB connection successful');
});

module.exports = db;