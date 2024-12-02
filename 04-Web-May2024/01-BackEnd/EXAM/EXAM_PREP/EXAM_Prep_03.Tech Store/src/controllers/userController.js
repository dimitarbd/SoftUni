const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { createToken } = require('../services/jwt');
const { login } = require('../services/user');
const { isGuest } = require('../middlewares/guards');
const { parseError } = require('../util');


const userRouter = Router();

userRouter.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

userRouter.post('/login', isGuest(),
    body('eamil').trim(),
    body('password').trim(),
    async (req, res) => {
        const { email, password } = req.body;

       try {
            const result = await login( email, password);
        const token = createToken(result);
        res.cookie('token', token);

        res.redirect('/');
    } catch (err) {
        res.render('login', { data: { email}, errors: parseError(err).errors })
    }
}
);

userRouter.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register');
})

module.exports = { userRouter }