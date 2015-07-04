var React = require('react');
var Router = require('react-router');

var UserProfile = React.createClass({
  render: function () {
    return (
      <div>
        <h2>User Profile</h2>
        <h3>{this.props.username}</h3>
        <p>Name: {this.props.bio.name}</p>
        <p>City: {this.props.bio.city}</p>
      </div>
    )
  }
});

module.exports = UserProfile;
