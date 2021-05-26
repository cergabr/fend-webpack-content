const path = require("path") 
const webpack = require("webpack")
const htmlWebPackPlugin = require("html-webpack-plugin")
const ESLintPlugin = require("eslint-webpack-plugin")

module.exports = {
    mode: "development",
	entry: "./src/client/index.js",
    devtool: "source-map",
    module:{
        rules: [
            {
                test: "/\.js$/",
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: "file-loader",
                  },
                ],
            }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new ESLintPlugin()
    ]
}
