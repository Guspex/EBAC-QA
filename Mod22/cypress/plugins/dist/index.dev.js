"use strict";

/// <reference types="cypress" />
var cucumber = require('@badeball/cypress-cucumber-preprocessor')["default"];

module.exports = function (on, config) {
  on('file:preprocessor', cucumber());
};

module.exports = {
  entry: './path/to/my/entry/file.js'
};

var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpack = require('webpack'); //to access built-in plugins


module.exports = {
  module: {
    rules: [{
      test: /\.txt$/,
      use: 'raw-loader'
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })]
};