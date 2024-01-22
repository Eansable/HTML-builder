const fs = require("node:fs")
const path = require("node:path")

fs.mkdir(path.resolve(__dirname, './files-copy'), () => {}, 1)

fs.readdir(path.resolve(__dirname, './files'), (err, files) => {
    files.forEach(file => {
        fs.stat(path.resolve(__dirname, './files/' + file), (err, stat) => {
            if(stat.isFile())
                fs.copyFile(path.resolve(__dirname, './files/' + file),
                path.resolve(__dirname, './files-copy/' + file), 1, () => {})
            })
    })
})