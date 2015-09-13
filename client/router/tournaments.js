'use strict';

var React = require('react/addons');
var Tournaments = require('../components/tournaments');

module.exports = function route() {
  React.render(
    <Tournaments />,
    document.querySelector('[data-react-init]')
  );
};
