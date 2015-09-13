'use strict';

var React = require('react/addons');
var Rx = require('rx');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="list-group">
        {
          this.props.tournaments.map(tournament => {
            return (
              <a href="" className="list-group-item" key={tournament.id}>
                <h4 class="list-group-item-heading">{tournament.name}</h4>
                <p class="list-group-item-text">{tournament.id}</p>
              </a>
            )
          })
        }
      </div>
    );
  }
});
