'use strict';

var config = require('./config');
require('./paypal')(config);

// TODO: Add DB support.
//require('./bookshelf');
var app = require('./app');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  io.emit('event', 'A user connected');

  socket.on('disconnect', function(){
    io.emit('event', 'A user disconnected');
  });
});

server.listen(config.PORT, config.HOSTNAME, function onServer() {
  var serverAddress = server.address();
  process.stdout.write('Server started on: ' + serverAddress.address + ':' + serverAddress.port + '\n\n');
});

var id = 1;

setInterval(function() {
  io.emit('tournament.create', {tournamentId: id++, key: 'name', value: 'tournament' + id});
}, 1000);
