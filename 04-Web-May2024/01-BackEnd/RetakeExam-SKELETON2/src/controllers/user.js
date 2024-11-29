const { Router } = require('express');

const { isGuest } = require('../middlewares/guards');

const userRouter = Router();

userRouter.get('/register', isGuest(), (req, res) => {
    res.render('register');
})