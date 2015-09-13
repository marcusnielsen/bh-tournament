'use strict';

var React = require('react/addons');
var Rx = require('rx');
var CreateTournament = require('../components/tournaments/create-tournament.js');
var Tournaments = require('../components/tournaments/tournaments.js');
var TournamentsModel = require('../../common/models/tournaments');

module.exports = function () {
  TournamentsModel.subject.subscribe((tournamentsState) => {
    React.render(
      <div>
        <CreateTournament />
        <Tournaments tournamentsState={tournamentsState}/>
      </div>,
      document.querySelector('[data-react-init]')
    );
  });
}
