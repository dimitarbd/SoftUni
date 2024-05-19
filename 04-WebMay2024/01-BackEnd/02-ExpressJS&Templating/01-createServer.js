const { log } = require('console');
const { createServer } = require('http');

const html = `
<form method="POST">
    <h1>Send data to the server</h1>
    <input name="data">
    <input type="submit>
</form>
`;

createServer ((req, res) => {
    if (req.method == 'GET') {
        res.write(html);
        res.end();
    } else if (req.method == 'POST') {
        console.log('Receiving data');
        console.log(req.on);

        res.statusCode = 204;
        res.end();
    }
}).listen(3000);