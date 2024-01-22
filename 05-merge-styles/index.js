const fs = require("node:fs")
const path = require("node:path")

fs.writeFile(path.resolve(__dirname, './project-dist/bundle.css'), '', 'utf-8', () => { })

fs.readdir(path.resolve(__dirname, './styles'), (err, files) => {
    files.forEach(file => {
        const [fileName, fileExt] = file.split('.')
        fs.stat(path.resolve(__dirname, './styles/' + file), (err, stat) => {
            if (stat.isFile() && fileExt === 'css')
                fs.readFile(path.resolve(__dirname, './styles/' + file), (error, content) => {
                    fs.appendFile(path.resolve(__dirname, './project-dist/bundle.css'), '\n' + content, () => { })
                })
        })
    })
})

