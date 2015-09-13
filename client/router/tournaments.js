'use strict';

var React = require('react/addons');
var Rx = require('rx');
var Tournaments = require('../components/tournaments/tournaments.js');
var TournamentsModel = require('../../common/models/tournaments');

module.exports = TournamentsModel.subject.subscribe((tournamentsState) => {
  React.render(
    <Tournaments tournamentsState={tournamentsState}/>,
    document.querySelector('[data-react-init]')
  );
});
