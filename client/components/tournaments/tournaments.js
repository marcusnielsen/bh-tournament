'use strict';

var React = require('react/addons');
var Rx = require('rx');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <div className="row">{
          this.props.tournaments.map(tournament => {
            return (<div key={tournament.id}>
              <div className="col-xs-12"><span>{tournament.name}</span> - <span>{tournament.id}</span></div>
            </div>)
          })
        }</div>
      </div>
    );
  }
});
