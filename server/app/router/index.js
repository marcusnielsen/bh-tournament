'use strict';

var routeLoader = require('./common/loader');

var childRouteInits = [
  require('./authentication'),
  require('./tournaments')
];

function init(router) {
  routeLoader(router, childRouteInits);

  router.get('/', function onGet(req, res) {
    res.send('Nothing here.');
  });

  return {
    path: '/api',
    router: router
  };
}

module.exports = init;
