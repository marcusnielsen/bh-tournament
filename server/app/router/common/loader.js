'use strict';

var express = require('express');

function routesLoader(router, childRouteInits) {
  childRouteInits.forEach(function (childRouteInit) {
    var childRoute = childRouteInit(express.Router({mergeParams: true}));
    router.use(childRoute.path, childRoute.router);
  });
}

module.exports = routesLoader;
