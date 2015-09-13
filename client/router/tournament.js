'use strict';

var React = require('react/addons');
var Tournament = require('../components/tournaments/tournament');

module.exports = function route(tournamentId) {
  React.render(
    <Tournament id={tournamentId} />,
    document.querySelector('[data-react-init]')
  );
};
