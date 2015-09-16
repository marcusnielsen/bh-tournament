'use strict';

var routeLoader = require('../common/loader');
var childRouteInits = [
  require('./json-web-token')
];

function init(router) {
  routeLoader(router, childRouteInits);

  router.get('/', function onGet(req, res) {
    res.send('Nothing here either.');
  });

  return {
    path: '/authentication',
    router: router
  };
}

module.exports = init;
