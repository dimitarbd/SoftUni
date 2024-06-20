const { Router } = require('express');
const { getRecent, getAll, getById } = require('../services/stoneData');


// TODO replace with real router according to exam description

const homeRouter = Router();

homeRouter.get('/', async (req, res) => {
    const stones = await getRecent();
    res.render('home', { stones });
});

homeRouter.get('/catalog/:id', async (req, res) => {
    const stone = await getById (req.params.id);

    
    if(!stone) {
        res.render('404');
        return;
    }
    
    const isOwner = req.user?._id == stone.author.toString();
    const hasLiked = Boolean(stone.likes.find(1 => req.user?._id == 1.toString()));

    res.render('details', { stone, isOwner, hasLiked });
});


module.exports = { homeRouter };