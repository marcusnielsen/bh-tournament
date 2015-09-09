'use strict';

var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var entries = [
  './client/index.js'
];

module.exports = {
  devtool: 'eval',
  context: __dirname,
  entry: entries,
  output: {
    path: path.join(__dirname, '.build'),
    filename: 'main-bundle.js'
  },
  node: {
    __dirname: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
                    // TODO: Only for development. Split into the dev config. -MANI
                    // activate source maps via loader query
                    'css?sourceMap!' +
                    'sass?sourceMap'
                )
      },
      {
        test: /\.html$/,
        loaders: ['html-loader']
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'app'),
        loader: 'jshint-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './client/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      ENVIRONMENT: JSON.stringify(process.env.NODE_ENV || 'development'),
      VERSION: JSON.stringify(require('./package.json').version)
    }),
    new ExtractTextPlugin("styles.css"),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    root: [path.resolve('./app/common')]
  }
};
