'use strict';

var tournamentIntents = require('../../intents/tournament');
var Events = require('../../events/index');
var update = require('react/lib/update');
var _ = require('lodash');

module.exports = subscribeToIntents;

function subscribeToIntents(modelSubject, modelState) {
  tournamentIntents.subject.subscribe(function (eventArgs) {
    switch(eventArgs.event) {
      case Events.TOURNAMENT_CREATE:
        createTournament(modelSubject, modelState, eventArgs.data);
        break;
      case Events.TOURNAMENT_UPDATE:
        updateTournament(modelSubject, modelState, eventArgs.data);
        break;
      default:
        console.error('Event not found!');
    }
  });
}

function createTournament(modelSubject, modelState, tournament) {
  modelState.tournaments = update(modelState.tournaments, {$push: [tournament]});
  modelSubject.onNext(modelState.tournaments);
}

function updateTournament(modelSubject, modelState, tournament) {
  var index = _.findIndex(modelState.tournaments, function (t) {
    return t.id === tournament.id;
  });

  modelState.tournaments = update(modelState.tournaments, {$merge: [tournament]});
  modelSubject.onNext(modelState.tournaments);
}

