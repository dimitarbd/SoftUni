const { Router } = require('express');
const { getRecent } = require('../services/stoneData');


// TODO replace with real router according to exam description

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const stones = await getRecent();
    res.render('home', { stones });
});

module.exports = { homeRouter };