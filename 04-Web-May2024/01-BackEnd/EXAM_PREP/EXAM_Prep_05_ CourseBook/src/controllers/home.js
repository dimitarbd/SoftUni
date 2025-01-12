const { Router } = require('express');
const { createToken } = require('../services/jwt');
const { login } = require('../services/user');
const { getRecent } = require('../services/courseBook');

// TODO replace with real router according to exam description

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const courses = await getRecent();
    
    res.render('home', { courses });
});




module.exports = { homeRouter };