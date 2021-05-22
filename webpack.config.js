const path = require('path') 
const webpack = require('webpack')

module.exports = {
	entry: './src/client/index.js',
    mode: 'development',
    module:{
        rules: [
            {
                test: '/\.js$',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: '/\.(png|jpe?g|gif)$/i',
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            }
        ]
    }
}
