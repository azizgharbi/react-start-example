var path = require('path');
var webpack = require('webpack');


module.exports = {
    entry:  './public/main.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/js/dist')
    },
    resolve: {
        extensions: ['.jsx','.scss','.json','.css','.js']
    },
    module: {

        rules: [

            { test: /\.css$/, loader: "style-loader!css-loader" },

            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
        ]
    }
};