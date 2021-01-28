// const User = require('../models/User');
const jwt = require("jsonwebtoken");
const connection = require("../database/database");
const { generatePassword, verifyPassword } = require("../util/crypto");

exports.login = async (req, res) => {
  const { email, password } = req.body;
};

exports.register = async (req, res) => {
  const conn = await connection.dbConnection();
  const { name, email, password } = req.body;

  const insertQuery = `INSERT INTO user (name, email, password) values('${name}', '${email}', '${generatePassword(
      password
  )}')`;

  const [row, fields] = await conn.query(insertQuery);

  const  [user] = await conn.query(`SELECT name,email FROM user WHERE id = ${row.insertId}`)

  // console.log(row);

  res.json({
    user: user,
  })
};

exports.userList = async (req, res) => {
  res.json({
    message: "User List",
    user: allUser,
  });
};
