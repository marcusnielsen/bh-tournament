var React = require('react/addons');
var socket = require('../../socket');
var tournamentIntent = require('../../../common/intents/tournament');
var uuid = require('uuid-lib');

module.exports = React.createClass({
  getInitialState: function () {
    return { tournamentName: ''};
  },
  createTournament: function (event) {
    tournamentIntent.createTournament({id: uuid.raw(), name: this.state.tournamentName});
    this.setState({tournamentName: ''});
    event.preventDefault();
  },
  handleChange: function (event) {
    this.setState({tournamentName: event.target.value});
  },
  render: function () {
    return (
      <div>
        <h3>Create tournament</h3>

        <form onSubmit={this.createTournament}>
          <div className="form-group">
            <label htmlFor="tournamentName">Tournament Name</label>
            <div className="input-group">
              <input type="text" className="form-control" value={this.state.tournamentName} onChange={this.handleChange} placeholder="Anna's soccer tournament"/>
              <div className="input-group-button">
                <button className="btn btn-success text-right" type="submit">
                  Create
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
});
