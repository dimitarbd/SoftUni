const express = require('express');

const app = express();

const homeHtml= `
<h1>Home Page</h1>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>
`;

const catalogHtml= `
<h1>Catalog Page</h1>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>
`;

app.get('/', (req, res) => {
    res.send(homeHtml);
});

app.get('/catalog', (req, res) => {
    res.send(catalogHtml);
});

app.get('/catalog/:productId', (req, res) => {
    console.log(req.params.productId);
    res.send(catalogHtml + `<p>Item ID ${req.params.productId}</p>`);
});

app.get('*', (req, res) => {
    res.status(404);
    res.send('404 File Not Found');
});

app.listen(3000, () => {
    console.log('App listening on port:3000');
});