//TODO import routers

const { homeRouter } = require('../controllers/home');
const { userRouter } = require('../controllers/userController');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(userRouter);

    
    //TODO register routers
}

module.exports = { configRoutes };