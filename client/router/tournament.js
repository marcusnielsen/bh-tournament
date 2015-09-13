'use strict';

var React = require('react/addons');
var Rx = require('rx');
var Tournament = require('../components/tournaments/tournament');
var TournamentsModel = require('../../common/models/tournaments');


module.exports = function (tournamentId) {
  TournamentsModel.subject.map(tournaments => {
    return _.find(tournaments, function (t) {
      return t.id.toString() === tournamentId;
    })
  }).subscribe((tournamentsState) => {
    React.render(
      <Tournament {...tournamentsState} />,
      document.querySelector('[data-react-init]')
    );
  });
}
