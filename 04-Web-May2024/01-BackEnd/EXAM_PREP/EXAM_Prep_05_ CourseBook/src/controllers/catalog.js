const { Router } = require('express');

const courseServices = require('../services/courseServices');
const { getAll } = require('../services/courseBook');
const { User } = require('../models/User');
const { CourseBook } = require('../models/CourseBook');

const catalogRouter = Router();

catalogRouter.get('/catalog', async (req, res) => {
    const articles = await getAll();

    res.render('catalog', { articles });
})

catalogRouter.get('/catalog/:id', async (req, res) => {
    const id = req.params.id;
    const course = await courseServices.getOneDetailed(id).lean();

    if (!course) {
        res.status(404).render('404')
        return;
    }

    course.hasUser = res.locals.hasUser;
    course.isAuthor = req.user?._id == course.owner.toString();
    course.hasSignUp = Boolean(course.signUpList.find(v => v.toString() == req.user?._id));


    res.render('details', { course });
})

module.exports = { catalogRouter };