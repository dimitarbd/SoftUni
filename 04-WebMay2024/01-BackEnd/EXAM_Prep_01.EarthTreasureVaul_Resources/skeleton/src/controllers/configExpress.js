const handlebars = require('express-handlebars');

function configExpress(app) {
    const hbs = handlebars.create({
        extname: 'hbs'
    });
}
module.exports = { configExpress };