const { verifyToken } = require("../../utils");

const logOutController = (req, res) => {
    const { token } = req.cookies;
    
    if (token) {
        verifyToken(token)
        .then(decode => {
            const { id, username, email, image } = decode;
            res
            .status(200)
            .json({user: { id, username, email, image }, status: 200});
        })
    }
    else {
        res
        .status(401)
        .json({ message: 'Unauthorized', status: 401 });
    }
}

module.exports = logOutController;