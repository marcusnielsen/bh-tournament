'use strict';

var Rx = require('rx');
var Events = require('../../events');
var intentSubject = new Rx.ReplaySubject(1);

module.exports = {
  subject: intentSubject,

  updateTournament: function (tournament) {
    intentSubject.onNext({
      event: Events.TOURNAMENT_UPDATE,
      data: tournament
    });
  }
};
