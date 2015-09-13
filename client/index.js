'use strict';

require('./styles/main.scss');
require('./router');
var uuid = require('uuid-lib');
var tournamentIntent = require('../common/intents/tournament');

var tournaments = [];

for(var i = 0; i < 5; i++) {
  var tournament = {id: uuid.raw(), name: 'Test ' + i};
  tournaments.push(tournament);
  tournamentIntent.createTournament(tournament);
}

/*i = 0;

setInterval(function () {
  if(i >= 20) { i = 0; }

  tournamentIntent.updateTournament({id: tournaments[i].id, name: uuid.raw()});

  i++
}, 1000);*/



