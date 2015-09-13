'use strict';

var Rx = require('rx');

var state = {
  tournaments: []
};

var subject = new Rx.ReplaySubject(1);

require('./subscribe-to-intents')(subject, state);

// TODO: Get initial state from server here.
subject.onNext(state.tournaments);

module.exports = {
  subject: subject
};
