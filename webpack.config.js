const { resolve } = require( 'path');

const webpack = require('webpack');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {

  return {
    context: __dirname,
    entry: './main',
    output: {
      path: __dirname + "/dist",
      filename: 'bundle.js'
    },

    resolve: {
        extensions: [
            '.js',
            '.ts'
        ]
    },

    devtool: 'cheap-module-source-map',

    module: {
      loaders: [
        { test: /\.ts$/, loaders: [ 'awesome-typescript-loader' ], exclude: /node_modules/ },
        // { test: /\.js$/, loaders: [ 'script-loader' ] }
      ]
    },

    devServer: {
      historyApiFallback: true
    }

  }
};