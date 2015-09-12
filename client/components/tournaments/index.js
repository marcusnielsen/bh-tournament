var React = require('react/addons');
var CreateTournament = require('./create-tournament');
var Tournaments = require('./tournaments');
var socket = require('../../socket');

module.exports = React.createClass({
  getInitialState: function() {
    return { tournaments: [{id: 0, name: 'empty'}]};
  },
  componentDidMount: function() {
    observeTournamentCreate().subscribe(tournament => {
      // TODO: Eeeks, do immutable!
      this.setState({tournaments: this.state.tournaments.concat([tournament])});
    });
  },
  render: function () {
    return (
      <div>
       <CreateTournament />
        <Tournaments tournaments={this.state.tournaments}/>
      </div>
    );
  }
});

function observeTournamentCreate() {
  return Rx.Observable.create(observable => {
    socket.on('tournament.create', function (data) {
      observable.onNext(data);
    });

    return function() {
      socket.removeAllListeners('tournament.create');
    };
  });
}

