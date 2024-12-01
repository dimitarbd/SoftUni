const { Router } = require('express');

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    res.render('home');
});

homeRouter.get('/about', async (req, res) => {
    res.render('about');
});

module.exports = { homeRouter };