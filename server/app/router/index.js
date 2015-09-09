'use strict';

var express = require('express');
var loginRouterInfo = require('./login')(express.Router({mergeParams: true}));

function init(router) {
  router.use(loginRouterInfo.path, loginRouterInfo.router);

  router.get('/', function onGet(req, res) {
    res.send('Hello World!');
  });

  return {
    path: '/api',
    router: router,
  };
}

module.exports = init;
