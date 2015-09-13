'use strict';

var Rx = require('rx');
var Events = require('../../events');
var intentSubject = new Rx.ReplaySubject(1);

module.exports = {
  subject: intentSubject,

  createTournament: function (tournament) {
    intentSubject.onNext({
      event: Events.TOURNAMENT_CREATE,
      data: tournament
    });
  }
};
