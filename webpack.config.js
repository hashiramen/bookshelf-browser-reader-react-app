'use strict';

const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
})

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
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader" 
                }]
            }
        ]
    },
    resolve: {
    },
    plugins: [
        extractSass
    ]
};
