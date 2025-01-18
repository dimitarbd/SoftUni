const { Router } = require('express');
const { createToken } = require('../services/jwt');
const { login } = require('../services/user');
const { getRecent, getMySignUpList } = require('../services/courseBook');
const { isUser } = require('../middlewares/guards');



const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const courses = await getRecent();
    
    res.render('home', { courses });
});

homeRouter.use('/profile', isUser, async (req, res) => {
    const userId = req.user._id;
    const signUp = await getMySignUpList(userId);
    const created = await getMyCreatedCourse(userId);

    res.render('profile', {signUp, created});
});



module.exports = { homeRouter };