'use strict';

var socket = require('socket.io-client')();

socket.on('error', function (data) {
  console.error(data);
})

module.exports = socket;
