const jwt = require("jsonwebtoken");
const connection = require("../database/database");
const {generatePassword, verifyPassword} = require("../util/crypto");

exports.login = async (req, res) => {
    const conn = await connection.dbConnection();
    const {email, password} = req.body;
    // console.log(email,password)
    const existUserQuery = `SELECT * FROM user WHERE email = '${email}'`;

    const [existingUser] = await conn.query(existUserQuery);
    if (!existingUser) throw new Error(`This email has no account!`)

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            name: existingUser.name,
            email: existingUser.email
        }
    }, process.env.JWT_SECRET);

    if (existingUser) {
        res.json({
            user: {
                name: existingUser[0].name,
                email: existingUser[0].email,
                token: token
            }
        })
    }
};

exports.register = async (req, res) => {
    const conn = await connection.dbConnection();
    const {name, email, password} = req.body;

    const insertQuery = `INSERT INTO user (name, email, password) values('${name}', '${email}', '${generatePassword(
        password
    )}')`;

    const [row, fields] = await conn.query(insertQuery);

    const [user] = await conn.query(`SELECT name,email FROM user WHERE id = ${row.insertId}`)

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
