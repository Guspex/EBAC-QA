"use strict";

/// <reference types="cypress" />
//require('dotenv').config()
var dotenvPlugin = require('cypress-dotenv');

module.exports = function (on, config) {
  //config.env.HOST = process.env.HOST
  config = dotenvPlugin(config);
  return config;
};