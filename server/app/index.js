'use strict';
var express = require('express');
var app = express();

// TODO: Configure correct for different envs.
app.use(require('morgan')('dev'));

var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('.build'));
var apiRouterInfo = require('./router')(express.Router());
app.use(apiRouterInfo.path, apiRouterInfo.router);

module.exports = app;
