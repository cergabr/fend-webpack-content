const path = require("path") 
const webpack = require("webpack")
const htmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
    mode: "production",
	entry: "./src/client/index.js",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
    },
    output: {
        libraryTarget: "var",
        library: "Client"
    },
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
            },
            {
                test: /.s?css$/,
                use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
            }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new MiniCssExtractPlugin({filename: "[name].css"}),
    ],
}
