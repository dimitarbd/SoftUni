const { Router } = require('express');

const catalogRouter = Router();

catalogRouter.get('/catalog', (req, res) => {
    res.render('catalog');
})

module.exports = { catalogRouter };