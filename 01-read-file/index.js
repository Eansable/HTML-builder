const fs = require('node:fs');
const path = require('node:path');
fs.readFile(path.resolve(__dirname, './text.txt'), 'utf-8', (err, text) => {
    console.log(text);
})
