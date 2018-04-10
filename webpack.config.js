var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry:  './public/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js/dist')
    },
    resolve: {
        extensions: ['.jsx','.scss','.json','.css','.js']
    },
    module: {

        rules: [

            { test: /\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },

            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
        ]
    }
};