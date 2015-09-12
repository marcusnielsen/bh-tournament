var paypal = require('paypal-rest-sdk');

function init(config) {

  paypal.configure({
    'mode': config.PAYPAL_MODE,
    'client_id': config.PAYPAL_CLIENT_ID,
    'client_secret': config.PAYPAL_CLIENT_SECRET
  });

  // TODO: Fix some hello world action.
  // We should be able to login with paypal and pay the tournament fee.
  debugger;
}

module.exports = init;
