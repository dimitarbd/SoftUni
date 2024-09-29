const { log } = require('console');
const fs = require('fs');

// const writer = fs.createWriteStream('./output.js');

process.stdin.on('data', (chunk) => {
    console.log('>>>', chunk.toString()); 
});