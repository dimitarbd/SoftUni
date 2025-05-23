const { verifyToken } = require("../services/jwt");

function session() {
    return function (req, res, next) {
        const token = req.cookies?.token;

        if (token) {
            try {
                const sessionData = verifyToken(token);
                req.user = {
                    email: sessionData.email,
                    id: sessionData.id
                };
                res.locals.hasUser = true;
            } catch (err) {
                res.clearCookie('token');
            }
        }
    }
}

module.exports = { session }