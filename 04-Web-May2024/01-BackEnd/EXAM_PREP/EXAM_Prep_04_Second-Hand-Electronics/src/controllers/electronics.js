const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { getById, create, update, deleteById, addToBuyingList, addToShoppingList } = require('../services/electronics');
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');


const productRouter = Router();

productRouter.get('/create', isUser(), (req, res) => {
    res.render('create');
});

productRouter.post('/create', isUser(),
    body('name').trim().isLength({ min: 10 }),
    body('type').trim().isLength({ min: 2 }),
    body('damages').trim().isLength({ min: 10 }),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }),
    body('description').trim().isLength({ min: 10, max: 200 }),
    body('production').trim().isInt({ min: 1900, max: 2023 }),
    body('exploitation').trim().isInt({ min: 0 }),
    body('price').trim().isInt({ min: 0 }),


    async (req, res) => {
        const userId = req.user._id;

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

productRouter.get('/edit/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    const product = await getById(id);

    if (!product) {
        res.status(404).render('404')
        return;
    }

    if (product.owner.toString() != req.user._id) {
        res.redirect('/login');
    }

    res.render('edit', { data: product });
});

productRouter.post('/edit/:productId', isUser(),
    body('name').trim().isLength({ min: 10 }),
    body('type').trim().isLength({ min: 2 }),
    body('damages').trim().isLength({ min: 10 }),
    body('image').trim().isURL({ require_tld: false, require_protocol: true }),
    body('description').trim().isLength({ min: 10, max: 200 }),
    body('production').trim().isInt({ min: 1900, max: 2023 }),
    body('exploitation').trim().isInt({ min: 0 }),
    body('price').trim().isInt({ min: 0 }),
    async (req, res) => {
        const productId = req.params.productId;
        const userId = req.user._id;

        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }
            const result = await update(productId, req.body, userId)

            res.redirect('/catalog/' + productId);
        } catch (err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors })
        }
    });

productRouter.get('/delete/:id', isUser(), async (req, res) => {
    const id = req.params.id;

    try {
        await deleteById(id, req.user._id)
    } catch (err) {
        if (err.message == 'Access denied') {
            res.redirect('/login');
            return;
        }
    }

    res.redirect('/catalog/');
});

productRouter.get('/buy/:productId', isUser(), async (req, res) => {
    const productId = req.params.productId;
    const userId = req.user._id;

    try {
        const result = await addToShoppingList(productId, userId)

        res.redirect('/catalog/' + productId);
    } catch (err) {
        res.render('/details', { errors: parseError(err).errors })
    }
});

module.exports = { productRouter }