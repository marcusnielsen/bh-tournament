'use strict';

var Rx = require('rx');
var update = require('react/lib/update');
var Events = require('../events');
var createTournamentIntent = require('../intents/create-tournament');

var subject = new Rx.ReplaySubject(1);

var tournamentsState = [];

function createTournament(tournament) {
  tournamentsState = update(tournamentsState, {$push: [tournament]});
  subject.onNext(tournamentsState);
}

createTournamentIntent.subject.subscribe(function (eventArgs) {
  switch(eventArgs.event) {
    case Events.TOURNAMENT_CREATE:
      createTournament(eventArgs.data);
      break;
    default:
      console.error('Event not found!');
  }
});

// TODO: Get initial state from server here.
subject.onNext(tournamentsState);

module.exports = {
  subject: subject
};
