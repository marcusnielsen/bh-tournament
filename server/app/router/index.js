'use strict';

var express = require('express');

var childRouteInits = [
  require('./login'),
  require('./tournaments')
];

function init(router) {
  childRouteInits.forEach(function (childRouteInit) {
    var childRoute = childRouteInit(express.Router({mergeParams: true}));
    router.use(childRoute.path, childRoute.router);
  });

  router.get('/', function onGet(req, res) {
    res.send('Hello World!');
  });

  return {
    path: '/api',
    router: router
  };
}

module.exports = init;
