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

var tournaments = [];

io.on('connection', function(socket){
  io.emit('event', 'A user connected');

  Rx.Observable.fromArray(tournaments).subscribe(function (tournament) {
    io.emit('tournament.create', tournament);
  });

  socket.on('disconnect', function(){
    io.emit('event', 'A user disconnected');
  });

  socket.on('tournament.create', function (data) {
    var serverData = {id: Uuid.raw(), name: data.name};
    tournaments.push(serverData);
    io.emit('tournament.create', serverData);
  });
});

server.listen(config.PORT, function onServer() {
  var serverAddress = server.address();
  process.stdout.write('Server started on port ' + serverAddress.port + '\n\n');
});
