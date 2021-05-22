const path = require('path') 
const webpack = require('webpack')
const htmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/client/index.js',
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
