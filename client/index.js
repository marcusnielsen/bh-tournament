'use strict';

require('./styles/main.scss');
var Rx = require('rx');
var React = require('react/addons');

var Tournaments = require('./components/tournaments');
var socket = require('./socket');

socket.on('connect', function(){
  console.log('connected');
});

socket.on('event', function(data){
  console.log(data);
});

socket.on('disconnect', function(){
  console.log('disconnected');
});

React.render(
<Tournaments />,
  document.querySelector('[data-react-init]')
);
