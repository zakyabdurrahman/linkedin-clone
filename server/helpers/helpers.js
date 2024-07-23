const bcrypt = require('bcrypt');
const { GraphQLError } = require('graphql');
const jwt = require('jsonwebtoken');

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt)
}

function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}

function createToken(payload) {
    return jwt.sign(payload, process.env.JWT_SECRET);
}

function createError(message, code) {
    let httpMsg = "INTERNAL SERVER ERROR";
    if (code === 400) httpMsg = "BAD REQUEST";
    return new GraphQLError(message, {
        extensions: {
            code: httpMsg,
            http: { status: code },
          },
    })
}

function decodeToken(token) {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = {
    hashPassword,
    createError,
    createToken,
    comparePassword,
    decodeToken
}