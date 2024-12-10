//TODO import routers

const { homeRouter } = require('../controllers/home');
const { userRouter } = require('../controllers/userController');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);
    

    app.get('*', (req, res) => {
        res.render('404');
    });
    //TODO register routers
}

module.exports = { configRoutes };