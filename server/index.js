'use strict';

var config = require('./config');
require('./paypal')(config);

// TODO: Add DB support.
//require('./bookshelf');
var app = require('./app');

var server = app.listen(config.PORT, config.HOSTNAME, function onServer() {
  var serverAddress = server.address();
  process.stdout.write('Server started on: ' + serverAddress.address + ':' + serverAddress.port + '\n\n');
});
