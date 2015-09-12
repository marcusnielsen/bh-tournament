'use strict';

var config = require('../config');
var paypal = require('paypal-rest-sdk');
var passport = require('passport');
var PayPalStrategy = require('passport-paypal').Strategy;

function init(config) {
  paypal.configure({
    'mode': config.PAYPAL_MODE,
    'client_id': config.PAYPAL_CLIENT_ID,
    'client_secret': config.PAYPAL_CLIENT_SECRET
  });
}

passport.use(new PayPalStrategy({
    returnURL: config.SERVER_BASE_URL + '/api/login/paypal/return',
    realm: config.SERVER_BASE_URL
  },
  function(identifier, profile, done) {

      //TODO: Figure out why this isn't called.
      debugger;
      // To keep the example simple, the user's PayPal profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the PayPal account with a user record in your database,
      // and return that user instead.
      profile.identifier = identifier;
      return done(null, profile);
  }
));

module.exports = init;
