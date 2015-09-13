'use strict';

var React = require('react/addons');
var Rx = require('rx');
var Tournament = require('../components/tournaments/tournament');
var TournamentsModel = require('../../common/models/tournaments');


module.exports = function (tournamentId) {
  TournamentsModel.subject.map(tournaments => {
    return _.first(tournaments, function (t) {
      return t.id === tournamentId;
    })
  }).subscribe((tournamentsState) => {
    debugger;
    React.render(
      <Tournament {...tournamentsState[0]} />,
      document.querySelector('[data-react-init]')
    );
  });
}
