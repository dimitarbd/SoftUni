const cookieParser = require('cookie-parser');
const express = require('express')
const handlebars = require('express-handlebars');

function configExpress(app) {
    const hbs = handlebars.create({
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');

    app.use(cookieParser);
    //TODO add session middleware

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    
}

module.exports = { configExpress };