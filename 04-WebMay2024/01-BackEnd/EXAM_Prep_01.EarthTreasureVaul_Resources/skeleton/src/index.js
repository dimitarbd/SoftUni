const express = require('express');
const { configDatabase } = require('./controllers/configDatabase');
const { configHbs } = require('./controllers/configHbs');
const { configExpress } = require('./controllers/configExpress');
const { configRoutes } = require('./controllers/configRoutes');

start();

async function start() {
    const app = express();

    await configDatabase();
    configHbs(app);
    configExpress(app);
    configRoutes(app);
    
    app.listen(3000, () => console.log('Server started http://localhost:3000'));
    
}