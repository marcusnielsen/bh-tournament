var React = require('react/addons');
var CreateTournament = require('./create-tournament');
var Tournaments = require('./tournaments');
var socket = require('../../socket');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
       <CreateTournament />
        <Tournaments {... this.props.tournamentsState}/>
      </div>
    );
  }
});

