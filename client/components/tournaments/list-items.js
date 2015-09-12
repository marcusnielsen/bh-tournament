'use strict';

var React = require('react/addons');
var ShowItem = require('./show-item');
var Rx = require('rx');
var socket = require('./socket');

function observeTournamentEvents() {
  return Rx.Observable.create(obs => {
    var fn = socket.on('tournament.*', obs.onNext.bind(obs));
    return function() {
      // TODO: Find out how to remove a listener in socket.io.
      debugger;
      socket.removeListener('tournament.*', fn);
    };
  });
}

function observeGames(tournamentEvents) {
  return tournamentEvents.scan((tournamentState, event) => {
    return React.addons.update(tournamentState, {
      [event.tournamentId]: {
        [event.key]: { $set: event.value }
      }
    });
  }, {});
}

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <ul>
          <li>
            <ShowItem />
          </li>
        </ul>
      </div>
    );
  }
});
