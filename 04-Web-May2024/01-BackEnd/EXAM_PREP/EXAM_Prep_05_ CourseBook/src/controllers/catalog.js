const { Router } = require('express');

const { getAll, getById } = require('../services/courseBook');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const courses = await getAll();

    res.render('catalog', { courses });
})

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;

    const courses = await getById(id);

    if (!courses) {
        res.status(404).render('404')
        return;
    }

    courses.hasUser = res.locals.hasUser;
    courses.isAuthor = Boolean(req.user?._id == product.author.toString());
    courses.hasSignUp = Boolean(courses.signUpList.find(v => v.toString() == req.user?._id));


    res.render('details', { courses });
})

module.exports = { catalogRouter };