const bcrypt = require('bcrypt');
const { getSignInQuery } = require("../../database/queries");
const { generateToken, generateError } = require('../../utils');
const { signInValidation } = require("../../validation");

const signInController = (req, res, next) => {
    const { email, password } = req.body;
    const user = {};
    signInValidation.validateAsync({ email, password }, { abortEarly: false })
        .then(data => {
            return getSignInQuery(data.email)
        })
        .then(result => {
            if (result.rows.length) {
                user.id = result.rows[0].id;
                user.username = result.rows[0].username;
                user.email = result.rows[0].email;
                return bcrypt.compare(password, result.rows[0].password)
            } else {
                generateError('Email or Password is Wrong!', 400)
            }
        })
        .then(result => {
            if (result) {
                return generateToken(user)
            } else {
                generateError('Email or Password is Wrong!', 400)
            }
        })
        .then(token => {
            if (token) {
                res
                    .status(200)
                    .cookie('token', token, { httpOnly: true })
                    .cookie('username', user.username, { httpOnly: true })
                    .cookie('email', user.email, { httpOnly: true })
                    .cookie('id', user.id, { httpOnly: true })
                    .json({ msg: 'SignIn Successfully!', status: 201 })
            } else {
                generateError('SignIn Failed! Please Try Again', 500)
            }
        })
        .catch((err) => next(err)); 
}

module.exports = signInController;