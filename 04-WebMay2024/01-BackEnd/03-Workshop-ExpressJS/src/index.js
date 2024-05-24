const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

app.get('*', (req, res) => {
    res.status(404);
    res.send('404 File Not Found');
});

app.listen(3000, () => {
    console.log('App listening on port:3000');
});