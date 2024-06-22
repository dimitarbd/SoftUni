const { Router } = require('express');

const { createToken } = require('../services/jwt');
const { login } = require('../services/user');
const { isGuest } = require('../middlewares/guards');

//This code creates a token and saves it in a cookie
// const result = await login('John', '123456');
// const token = createToken(result);
// res.cookie('token', token);

const userRouter = Router();

userRouter.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

module.exports = { userRouter };