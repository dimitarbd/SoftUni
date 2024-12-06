const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { getById, create, update, deleteById, addToPreferredList } = require('../services/techStore');
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');


const profileRouter = Router();

profileRouter.get('/profile', isUser(), (req, res) => {
    res.render('profile');
});


module.exports = { profileRouter }