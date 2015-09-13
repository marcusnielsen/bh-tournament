'use strict';

var Rx = require('rx');
var Events = require('../../events');
var intentSubject = new Rx.ReplaySubject(1);

function updateTournament(tournament) {
  intentSubject.onNext({
    event: Events.TOURNAMENT_UPDATE,
    data: tournament
  });
}

function createTournament(tournament) {
  intentSubject.onNext({
    event: Events.TOURNAMENT_CREATE,
    data: tournament
  });
}

module.exports = {
  subject: intentSubject,
  updateTournament: updateTournament,
  createTournament: createTournament
};
