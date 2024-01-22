const fs = require("node:fs")
const path = require("node:path")

fs.readdir(path.resolve(__dirname, './secret-folder'), (err, files) => {
    files.forEach(file => {
        const [fileName, fileExt] = file.split('.')
        fs.stat(path.resolve(__dirname, './secret-folder/' + file), (err, stat) => {
            if(stat.isFile())
                console.log(`${fileName} -  ${fileExt} - ${(stat.size / 1024).toFixed(2)}kb`);
        })
    })
})