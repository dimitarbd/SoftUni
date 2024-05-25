const express = require('express');
const { catalogRouter } = require('./catalog.js');
const { countMiddleware } = require('./middleware/counter.js');

const app = express();

const homeHtml= `
<h1>Home Page</h1>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>
`;

app.get('/', (req, res) => {
    res.send(homeHtml);
});

app.use('/catalog', catalogRouter);

app.get('/data', countMiddleware, (req, res) => {
    res.json ({
        message: 'hello',
        value: 5,
        count: req.count
    });
});

app.get('*', (req, res) => {
    res.status(404);
    res.send('404 File Not Found');
});

app.listen(3000, () => {
    console.log('App listening on port:3000');
});