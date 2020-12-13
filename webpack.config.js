const path = require('path');
const webpack = require('webpack');

const rootPath = path.resolve( __dirname, 'src' );
const destinationPath = path.resolve( __dirname, 'dist' );

module.exports = {
    context: rootPath,

    entry: {
        'main': './index.ts'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            rootPath,
            'node_modules'
        ]
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: [ /node_modules/ ],
            use: 'awesome-typescript-loader'
        },],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        disableHostCheck: true, 
        // public: 'localhost:9000'
    }
};