const jwt = require('jsonwebtoken');
require('env2')('.env');
const crypt = require('crypt')

const key1 = crypt.randomBytes(32).toString('hex');
const key2 = crypt.randomBytes(32).toString('hex');

const secret_key = process.env.ACCESS_SECRET_KEY;
const generateToken = (payload) => {
    return new Promise ((resolve, reject) => {
        jwt.sign(payload, secret_key, (err, token) => {
            if(err) {
                reject(err)
            }else{
                resolve(token)
            }
        })
    })
}

module.exports = generateToken;