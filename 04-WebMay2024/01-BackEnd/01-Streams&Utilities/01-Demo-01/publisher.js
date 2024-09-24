const { publish } = require('./bus');

function start() {
    const data = [1, 2, 3];

    publish(data);
}

module.exports = { start };