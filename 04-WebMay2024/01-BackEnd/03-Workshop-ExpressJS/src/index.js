const express = require('express');
const { catalogRouter } = require('../catalog');

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

app.get('*', (req, res) => {
    res.status(404);
    res.send('404 File Not Found');
});

app.listen(3000, () => {
    console.log('App listening on port:3000');
});