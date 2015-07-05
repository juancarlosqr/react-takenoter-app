var React = require('react');
var NotesList = require('./NotesList');

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
        <p><NotesList notes={this.props.notes} /></p>
      </div>
    )
  }
});

module.exports = Notes;
