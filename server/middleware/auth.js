const { createError } = require("../helpers/helpers");

async function authentication(req) {
    const bearerToken = req.headers.authorization;

    if (!bearerToken) throw createError('Invalid Token', 401);

    return {

    }
}

module.exports = authentication;