const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    try{
        const payload = jwt.verify(token, 'soboz');

        req.payload = payload;
         next();
    } catch(error) {
        res.status(401).json({
            message: "forbidden"
        });
    }
};