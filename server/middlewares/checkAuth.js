const { decode } = require('jsonwebtoken');
const { verifyToken } = require('../utils');

const checkAuth = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.redirect('/signin');

    return verifyToken(token)
    .then(decode => {
        req.decode = decode;
        next();
    })
    .catch(err => next(err))
}

module.exports = checkAuth