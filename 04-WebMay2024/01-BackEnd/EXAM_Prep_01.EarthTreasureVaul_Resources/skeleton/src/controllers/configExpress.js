const cookieParser = require('cookie-parser');
const express = require('express');
const handlebars = require('express-handlebars');

function configExpress(app) {
    const hbs = handlebars.create({
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser);
    // TODO add sessionmiddleware
}

module.exports = { configExpress };