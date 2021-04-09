const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        console.log("token:",token);
        const decodedtoken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodedtoken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'invalid user id';
        } else {
            req.verifieduserid=userId;
            req.droituser=decodedtoken.droituser;
            next();
        }

    } catch (e) {
        console.log(e);
        res.status(401).json({
            error: 'invalid request'
        });

    }
};