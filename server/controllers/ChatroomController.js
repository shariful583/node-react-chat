const connection = require("../database/database");

exports.chatUserList = async (req, res) => {
    const query = `SELECT name, email FROM user`;
    const countQuery = `SELECT count(id) as total FROM user`;

    const conn = await connection.dbConnection();
    const [result] = await conn.query(query);
    const [total] = await conn.query(countQuery);

    if (!result) throw new Error(`No user found`);

    res.json({
        users: {
            total: total[0].total,
            result
        }
    })
};

exports.joinChat = async (req, res) => {

};