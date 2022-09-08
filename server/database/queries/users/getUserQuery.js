const connection = require('../../config/connection');
const getUserQuery = (userId) => {
    const sql = {
        text: `SELECT username, email, img FROM users WHERE id = $1`,
        values: [userId]
    };
    return connection.query(sql);
}


module.exports = getUserQuery;