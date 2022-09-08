const joi = require('joi');

const signUpValidation = joi.object({
    username: joi
        .string()
        .min(3)
        .max(30)
        .required(),

    email: joi
        .string()
        .min(6)
        .max(60)
        .email({
            minDomainSegments: 2,
            tlds: {allow: ["com", "net"]}
        })
        .required(),
        
    password: joi
        .string()
        .min(8)
        .required(),

    confirmPassword: joi
        .ref('password')
})


module.exports = signUpValidation;