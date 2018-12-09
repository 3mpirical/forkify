const path = require("path");

const Webpack = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname, "dist/js"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};




module.exports = Webpack;
