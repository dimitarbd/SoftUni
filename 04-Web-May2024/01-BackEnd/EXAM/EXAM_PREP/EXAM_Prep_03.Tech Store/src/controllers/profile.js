const { Router } = require('express');
const { body, validationResult } = require('express-validator');

const { getById, create, update, deleteById, addToPreferredList, getByAuthorId, getMyPreferred, getMyCreatedDevices } = require('../services/techStore');
const { isUser } = require('../middlewares/guards');
const { parseError } = require('../util');


const profileRouter = Router();

profileRouter.get('/profile', isUser(), async (req, res) => {
    const userId= req.user._id;

    const prefered = await getMyPreferred(userId);
    const created = await getMyCreatedDevices(userId);

    res.render('profile', { prefered,  created});
});


module.exports = { profileRouter }