var React = require('react/addons');
var socket = require('../../socket');

module.exports = React.createClass({
  createTournament: function (event) {
    var tournamentName = React.findDOMNode(this.refs.tournamentName).value.trim();
    socket.emit('tournament.create', {id: tournamentName, name: tournamentName});
    debugger;
    React.findDOMNode(this.refs.tournamentName).value = '';
  },
  render: function () {
    return (
      <div>
        <h3>Create tournament</h3>
        <div className="row">
          <div className="col-xs-8">
            <input type="text" className="form-control" ref="tournamentName"/>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-success" onClick={this.createTournament}>
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
});
