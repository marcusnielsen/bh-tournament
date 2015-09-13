var React = require('react/addons');
var updateTournamentIntent = require('../../../../common/intents/tournament/update-tournament');

module.exports = React.createClass({
  getInitialState: function() {
    return { name: '' };
  },
  updateTournament: function (event) {
    updateTournamentIntent.updateTournament({id: this.props.id, name: this.state.name});
    event.preventDefault();
  },
  handleChange: function (event) {
    this.setState({name: event.target.value});
  },
  render: function () {
    return (
      <div>
        <h2>{this.props.name} - <small>{this.props.id}</small></h2>
        <form onSubmit={this.updateTournament}>
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
