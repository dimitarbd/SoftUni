const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { isGuest, isUser } = require('../middlewares/guards');
const { register, login } = require('../services/user');

const { getRecent } = require('../services/stoneData');

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
    body('image').trim().isURL().isLength({ min: 2 }).withMessage('image must be a valid URL'),
    body('location').trim().isLength({ min: 5 }).withMessage('location must be between 5 and 15 characters long'),
    body('formula').trim().isLength({ min: 3 }).withMessage('formula must be between 3 and 30 characters long'),
    body('description').trim().isLength({ min: 2 }).withMessage('description must be at least 10 characters long'),
    async (req, res) => {
    res.render('create');
});

module.exports = { stoneRouter };