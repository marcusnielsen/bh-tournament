'use strict';

var config = require('../../../config');
var jwt = require('jsonwebtoken');

function initJwt() {
  // TODO: Implement user auth.
  var token = jwt.sign(
    { user: 'guest' },
    config.JWT_SECRET,
    { expiresInMinutes: 60 * 5 }
  );

  return token;
}

function init(router) {
  router.get('/', function onGet(req, res) {
    res.json(initJwt());
  });

  return {
    path: '/login',
    router: router,
  };
}

module.exports = init;
