'use strict';

function verify(req, res, next) {
  jwt.verify(token, 'shhhhh', function(err, decoded) {
    debugger;
    if(err) { return next(err)}

    req.userToken = decoded;
    next();
  });
}

module.exports = verify;
