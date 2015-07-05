var React = require('react');
var Router = require('react-router');

var Repos = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function () {
    return (
      <div>
        <h2>Repos</h2>
        <h3>{this.props.username}</h3>
        <p>{this.props.repos}</p>
      </div>
    )
  }
});

module.exports = Repos;
