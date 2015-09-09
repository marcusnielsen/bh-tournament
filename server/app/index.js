'use strict';

var express = require('express');
var app = express();

// TODO: Configure correct for different envs.
app.use(require('morgan')('dev'));

var apiRouterInfo = require('./router')(express.Router());
app.use(apiRouterInfo.path, apiRouterInfo.router);

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
