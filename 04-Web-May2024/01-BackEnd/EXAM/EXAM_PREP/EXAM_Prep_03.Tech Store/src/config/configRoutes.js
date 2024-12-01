//TODO import routers

const { catalogRouter } = require('../controllers/catalog');
const { homeRouter } = require('../controllers/home');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(catalogRouter);

    //TODO register routers
}

module.exports = { configRoutes };