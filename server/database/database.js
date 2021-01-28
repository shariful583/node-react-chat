require("dotenv").config();
const mysql = require("mysql2/promise");

options = {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

const dbConnection = async () => {
    const db = await mysql.createConnection(options);
    return db;
};

module.exports = {dbConnection}


