const express = require('express');
const { configDatabase } = require('./config/configDatabase');
const { configHbs } = require('./config/configHbs');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');

const { register, login } = require('./services/user');
const { createToken, verifyToken } = require('./services/jwt');

start();

async function start() {
    const app = express();

    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);

    app.listen(3000, () => {
        console.log('Server started http://localhost:3000');
        // test();
    });
}

async function test() {
    try {
        // const result = await register('john@abv.bg', 'John', '123');
        // const token = createToken(result);
        // console.log(token);
        
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AYWJ2LmJnIiwibmFtZSI6IkpvIiwiX2lkIjoiNjc0YjVjY2UxZjg1NDU2ZDFiNjNhNzExIiwiaWF0IjoxNzMyOTkyMjA2LCJleHAiOjE3MzMwNzg2MDZ9.GIuSB48D9PbuJ4eO9y2n5luyeqZBB5z-7fxR2YaNiWM'
        // const parsed = verifyToken(token)
        // console.log(parsed);

        // const result = await login('john@abv.bg', '123');
        // const token = createToken(result);
        // console.log(token);
    } catch (err) {
        console.log('Caugth error!');
        console.error(err.message);        
    }
}
