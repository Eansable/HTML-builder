const fs = require('node:fs');
const path = require('node:path');
fs.writeFile(path.resolve(__dirname, './text.txt'), '', 'utf-8', () => {})
const createFile = fs.createWriteStream(path.resolve(__dirname, './text.txt'))
let textFinish = ''
process.stdin.setEncoding('utf-8')
console.log("Please, write text!");
process.stdin.on('data', text => {
    console.log(text.toString());
    if (text.toString() === 'exit')
        process.exit(0)
    textFinish += text
})

process.on('SIGINT', (value) => {
    process.exit(0)
})

process.on('exit', (text, edsa) => {
   createFile.write(textFinish)
   console.log("File was to write");
})
