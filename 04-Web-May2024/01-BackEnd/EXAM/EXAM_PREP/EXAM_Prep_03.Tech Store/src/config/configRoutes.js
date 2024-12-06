const { catalogRouter } = require('../controllers/catalog');
const { homeRouter } = require('../controllers/home');
const { productRouter } = require('../controllers/product');
const { userRouter } = require('../controllers/userController');

function configRoutes(app) {
    app.use(homeRouter);
    app.use(catalogRouter);
    app.use(userRouter);
    app.use(productRouter);
    app.use();

    app.get('*', (req, res) => {
        res.render('404');
    });

    //TODO register routers
}

module.exports = { configRoutes };