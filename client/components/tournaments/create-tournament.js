var React = require('react/addons');

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Create tournament</h3>
        <div className="row">
          <div className="col-xs-8">
            <input type="text" className="form-control"/>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-success">
              Create
            </button>
          </div>
        </div>
      </div>
    );
  }
});
