const path = require("path")
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        dirname: path.resolve(__dirname, "dist")
    }
}