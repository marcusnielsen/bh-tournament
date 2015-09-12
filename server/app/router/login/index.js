'use strict';

var config = require('../../../config');
var passport = require('passport');

function init(router) {
  router.get('/paypal', passport.authenticate('paypal', { failureRedirect: '/failure' }), function onGet(req, res) {
    debugger;
    res.send('This might never be visible since we get redirected to /return.');
  });

  router.get('/paypal/return', function onGet(req, res) {
    debugger;
    res.cookie('user', req.query['openid.ext1.value.fullname']);
    res.send('Login successful!');
  });

  router.get('/paypal/logout', function onGet(req, res) {
    debugger;
    res.cookie('user', '');
    res.send('Logout successful!');
  });

  return {
    path: '/login',
    router: router
  };
}

module.exports = init;
