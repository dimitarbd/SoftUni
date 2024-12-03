const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { getById, create } = require('../services/techStore');
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');


const productRouter = Router();

productRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

productRouter.post('/create', isUser(),
    body('brand').trim().isLength({ min: 2}),
    body('model').trim().isLength({ min: 5}),
    body('hardDisk').trim().isLength({ min: 5}),
    body('screenSize').trim().isLength({ min: 1}),
    body('ram').trim().isLength({ min: 2}),
    body('operatingSystem').trim().isLength({ min: 5, max: 20}),
    body('cpu').trim().isLength({ min: 10, max: 50 }),
    body('gpu').trim().isLength({ min: 10, max: 50}),
    body('price').trim().isNumeric({ min: 0 }),
    body('color').trim().isLength({ min: 2, max: 10}),
    body('weight').trim().isLength({ min: 1}),
    body('image').trim().isURL({ require_tld: false, require_protocol: true}),
    async (req, res) => {
        const userId= req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;

            }
            const result = await create(req.body, userId)

            res.redirect('/');
        } catch (err) {
            res.render('create', { data: req.body, errors: parseError(err).errors })
        }
    });

module.exports = { productRouter }
