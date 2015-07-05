var React = require('react');

var UserProfile = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      <div>
        <h2>User Profile</h2>
        <h3>{this.props.username}</h3>
        <p>Bio: {this.props.bio}</p>
      </div>
    )
  }
});

module.exports = UserProfile;
