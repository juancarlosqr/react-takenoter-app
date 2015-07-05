var React = require('react');
var Router = require('react-router');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <div>
        <h2>Notes</h2>
        <h3>{this.props.username}</h3>
        <p>{this.props.notes}</p>
      </div>
    )
  }
});

module.exports = Notes;
