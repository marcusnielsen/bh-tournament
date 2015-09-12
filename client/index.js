'use strict';

require('./styles/main.scss');
var Tournaments = require('./components/tournaments');

var Rx = require('rx');
var React = require('react');

React.render(
<Tournaments />,
  document.querySelectorAll('[data-react-init]')[0]
);
