const bcrypt = require('bcrypt');
const { hash } = require('bcryptjs');

const { getSignUpQuery, getSignInQuery } = require('../../database/queries');
const { generateToken, generateError } = require('../../utils')
const { signUpValidation } = require('../../validation');

const signUpController = (req, res, next) => {
    const { username, email, password, confirmPassword } = req.body;
    let id;
    signUpValidation
        .validateAsync(
            { username, email, password, confirmPassword },
            { abortEarly: false }
        )
        .then(data => {
            return getSignInQuery(data.email)
        })
        .then(result => {
            if (result.rows.length) {
                throw generateError('Email is Already Exist!', 400)
            } else {
                return bcrypt.hash(password, 10)
            }
        })
        .then(hashedPassword => {
            const user = {
                username,
                email,
                password: hashedPassword,
            }
            return user;
        })
        .then(user => {
            return getSignUpQuery(user);
        })
        .then(result => {
            id = result.rows[0].id;
            return generateToken(result.rows[0]);
        })
        .then(token => {
            if (token) {
                res
                    .status(200)
                    .cookie('token', token, { httpOnly: true })
                    .cookie('username', username, { httpOnly: true })
                    .cookie('email', email, { httpOnly: true })
                    .cookie('id', id, { httpOnly: true })
                    .json({ msg: 'Signup Successfully!', status: 201 })
            } else {
                throw generateError('Signup Failed! Please Try Again', 500)
            }
        })
        .catch((err) => next(err));
};

module.exports = signUpController;