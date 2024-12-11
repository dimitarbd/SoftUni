const { Router } = require('express');

const { getAll, getById } = require('../services/courseBook');
const { User } = require('../models/User');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const articles = await getAll();

    res.render('catalog', { articles });
})

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const course = await getById(id);
    const ownerId = course.owner;

    const { email } = await User.findOne({ '_id': ownerId });

    if (!course) {
        res.status(404).render('404')
        return;
    }

    course.hasUser = res.locals.hasUser;
    course.isAuthor = Boolean(req.user?._id == course.owner.toString());
    course.hasSignUp = Boolean(course.signUpList.find(v => v.toString() == req.user?._id));


    res.render('details', { data: { email }, course });
})

module.exports = { catalogRouter };