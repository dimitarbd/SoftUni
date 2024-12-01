const { Router } = require('express');
const { createToken } = require('../services/jwt');
const { login } = require('../services/user');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    console.log(req.user);

    res.render('home');
});

module.exports = { homeRouter };