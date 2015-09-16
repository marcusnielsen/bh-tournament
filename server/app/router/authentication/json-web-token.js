'use strict';

var config = require('../../../config');
var jwt = require('jsonwebtoken');

function initJwt(req, res) {
  // TODO: Implement user auth.
  if(!req.body.user || !req.body.password) {
    return 'Error, cos of reasons';
  }

  var token = jwt.sign(
    { user: 'guest' },
    config.JWT_SECRET,
    { expiresInMinutes: 60 * 5 }
  );

  return token;
}

function init(router) {
  router.post('/', function onGet(req, res) {
    res.json(initJwt(req, res));
  });

  return {
    path: '/jwt',
    router: router
  };
}

module.exports = init;
