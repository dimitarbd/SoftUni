const { Router } = require('express');

const { getAll, getById } = require('../services/courseBook');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const articles = await getAll();

    res.render('catalog', { articles });
})

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const course = await getById(id);



    if (!course) {
        res.status(404).render('404')
        return;
    }

    course.hasUser = res.locals.hasUser;
    course.isAuthor = Boolean(req.user?._id == course.owner.toString());
    course.hasSignUp = Boolean(course.signUpList.find(v => v.toString() == req.user?._id));


    res.render('details', { course });
})

module.exports = { catalogRouter };