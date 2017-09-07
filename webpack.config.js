'use strict';

const path = require('path');

module.exports = {
    entry: {
        develop: ['babel-polyfill', './src/index.js']
    },
    context: __dirname,
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
            }
        ]
    },
    resolve: {
    },
    plugins: [
    ]
};
