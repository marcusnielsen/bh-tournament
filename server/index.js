'use strict';

var config = require('./config');
require('./paypal')(config);

// TODO: Add DB support.
//require('./bookshelf');
var app = require('./app');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var Rx = require('rx');
var Uuid = require('uuid-lib');
var _ = require('lodash');

var tournaments = [];

io.on('connection', function(socket){
  Rx.Observable.fromArray(tournaments).subscribe(function (tournament) {
    io.emit('tournament.create', tournament);
  });

  socket.on('tournament.create', function (data) {
    var serverData = {id: Uuid.raw(), name: data.name};
    // TODO: Find out how to handle race condition with Observable.fromArray.
    tournaments.push(serverData);
    io.emit('tournament.create', serverData);
  });

  socket.on('tournament.update', function (data) {
    tournaments[_.findIndex(tournaments, function (t) {
        return t.id === data.id;
      })] = data;

    io.emit('tournament.update', data);
  });
});

server.listen(config.PORT, function onServer() {
  var serverAddress = server.address();
  process.stdout.write('Server started on port ' + serverAddress.port + '\n\n');
});
