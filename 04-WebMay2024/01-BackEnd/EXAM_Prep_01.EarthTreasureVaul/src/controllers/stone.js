const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isGuest, isUser } = require('../middlewares/guards');
const { register, login } = require('../services/user');

const { getRecent } = require('../services/stoneData');
const { parseError } = require('../util');
const { createToken } = require('../services/jwt');
const { getById, create, update, deleteById } = require('../services/stoneData');

// TODO replace with real router according to exam description

const stoneRouter = Router();

stoneRouter.get('/create', isUser(),
    async (req, res) => {
        res.render('create');
    });

stoneRouter.post('/create',
    body('name').trim().isLength({ min: 2 }).withMessage('name must be at least 2 characters long'),
    body('category').trim().isLength({ min: 3 }).withMessage('category must be at least 3 characters long'),
    body('color').trim().isLength({ min: 2 }).withMessage('color must be at least 2 characters long'),
    body('image').trim().isURL({ require_tld: false }).isLength({ min: 2 }).withMessage('image must be a valid URL'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('location must be between 5 and 15 characters long'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('formula must be between 3 and 30 characters long'),
    body('description').trim().isLength({ min: 10 }).withMessage('description must be at least 10 characters long'),

    async (req, res) => {
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await create(req.body, req.user._id);

            res.redirect('/catalog');

        } catch (err) {
            res.render('create', { data: req.body, errors: parseError(err).errors });
        }


    }
);


stoneRouter.get('/edit/:id', isUser(),
    async (req, res) => {
        const stone = await getById(req.params.id);

        if (!stone) {
            res.render('404');
            return;
        }
        const isOwner = req.user._id == stone.author.toString();

        if(!isOwner) {
            res.redirect('/login');
            return;
        }
        res.render('edit', { data: stone });
    });

stoneRouter.post('/edit/:id', isUser(),
    body('name').trim().isLength({ min: 2 }).withMessage('name must be at least 2 characters long'),
    body('category').trim().isLength({ min: 3 }).withMessage('category must be at least 3 characters long'),
    body('color').trim().isLength({ min: 2 }).withMessage('color must be at least 2 characters long'),
    body('image').trim().isURL({ require_tld: false }).isLength({ min: 2 }).withMessage('image must be a valid URL'),
    body('location').trim().isLength({ min: 5, max: 15 }).withMessage('location must be between 5 and 15 characters long'),
    body('formula').trim().isLength({ min: 3, max: 30 }).withMessage('formula must be between 3 and 30 characters long'),
    body('description').trim().isLength({ min: 10 }).withMessage('description must be at least 10 characters long'),

    async (req, res) => {
        const stoneId = req.params.id;
        const userId = req.user._id;
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(stoneId, req.body, userId);

            res.redirect('/catalog/' + stoneId);

        } catch (err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors });
        }


    }
);

stoneRouter.get('/delete/:id', isUser(), async (req, res) => {
        const stoneId = req.params.id;
        const userId = req.user._id;
        try {
            const validation = validationResult(req);

            if (validation.errors.length) {
                throw validation.errors;
            }

            const result = await update(stoneId, req.body, userId);

            res.redirect('/catalog/' + stoneId);

        } catch (err) {
            res.render('edit', { data: req.body, errors: parseError(err).errors });
        }


    }
);

module.exports = { stoneRouter };