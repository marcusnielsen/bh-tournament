'use strict';

var createTournamentIntent = require('../../intents/tournament/create-tournament');
var updateTournamentIntent = require('../../intents/tournament/update-tournament');
var Events = require('../../events/index');
var update = require('react/lib/update');
var _ = require('lodash');

module.exports = subscribeToIntents;

function subscribeToIntents(modelSubject, modelState) {
  createTournamentIntent.subject.subscribe(function (eventArgs) {
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

  // TODO: Merge intent code.
  updateTournamentIntent.subject.subscribe(function (eventArgs) {
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
  var index = _findIndex(modelState.tournaments, function (t) {
    t.id === tournament.id;
  });
  modelState.tournaments = update(modelState.tournaments, {$set: {[index]: tournament}});
  debugger;
  modelSubject.onNext(modelState.tournaments);
}

