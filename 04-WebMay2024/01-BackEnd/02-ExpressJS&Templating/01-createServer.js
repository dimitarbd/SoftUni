const { createServer } = require('http');

const html = `
<form method="POST">
    <h1>Send data to server</h1>
    <input name="data">
    <input type="submit">
</form>
`;

createServer ((req, res) => {
    if (req.method == 'GET') {
        res.write(html);
        res.end();
    } else if (req.method == 'POST') {
        console.log('POST request');

        req.on('data', (chunk) => {
            console.log('Receiving data', chunk.toString());
        });

        res.statusCode = 204;
        res.end();
    }
}).listen(3000);