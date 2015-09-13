var React = require('react/addons');
var socket = require('../../../socket');

module.exports = React.createClass({
  getInitialState: function() {
    return { name: '' };
  },
  componentDidMount: function() {
    observeTournamentEdit(this.props.id).subscribe(tournament => {
      this.setState({name: tournament.name});
    });
  },
  editTournament: function (event) {
    socket.emit('tournament.update', {id: this.props.id, name: this.state.name});
  },
  handleChange: function (event) {
    this.setState({name: event.target.value.trim()});
  },
  render: function () {
    return (
      <div>
        <h2>{this.state.name} - <small>{this.props.id}</small></h2>
        <form onSubmit={this.editTournament}>
          <div className="form-group">
            <label htmlFor="tournamentName">Tournament Name</label>
            <div className="input-group">
              <input type="text" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="Anna's soccer tournament"/>
              <div className="input-group-button">
                <button className="btn btn-success text-right" type="submit">
                  Edit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

function observeTournamentEdit(tournamentId) {
  return Rx.Observable.create(observable => {
    socket.on('tournament.update', function (data) {
      observable.onNext(data);
    });

    return function() {
      socket.removeAllListeners('tournament.update');
    };
  }).filter(data => { return data.id === tournamentId });
}

