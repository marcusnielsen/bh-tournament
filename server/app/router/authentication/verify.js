'use strict';

var jwt = require('jsonwebtoken');
var config = require('../../../config');

function verify(req, res, next) {
  debugger;
  var token = req.body.token || req.query.token;

  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });
  }

  // verifies secret and checks exp
  jwt.verify(token, config.JWT_SECRET, function(err, decoded) {
    if (err) {
      return res.json({ success: false, message: 'Failed to authenticate token.' });
    }
    else {
      req.token = decoded;
      next();
    }
  });
}

module.exports = verify;
