'use strict';

var verify = require('./authentication/verify');
var routeLoader = require('./common/loader');

var childRouteInits = [
  require('./authentication'),
  require('./tournaments')
];

function init(router) {
  routeLoader(router, childRouteInits);
  router.use(verify);
  router.get('/', function (req, res) {
    res.send('You gots the login secrets!');
  });

  return {
    path: '/api',
    router: router
  };
}

module.exports = init;
