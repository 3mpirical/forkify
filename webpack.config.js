const path = require("path");

const Webpack = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "bundle.js"
    },
    mode: "development"
};




module.exports = Webpack;
