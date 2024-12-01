const { Router } = require('express');
const { getAll } = require('../services/techStore');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const products = await getAll();

    res.render('catalog', { products });
})

module.exports = { catalogRouter };