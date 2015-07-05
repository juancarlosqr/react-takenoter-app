var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render: function () {
    return (
      <div>
        <h2>Notes</h2>
        <h3>{this.props.username}</h3>
        <p><AddNote username={this.props.username} addNote={this.props.addNote} /></p>
        <p><NotesList notes={this.props.notes} /></p>
      </div>
    )
  }
});

module.exports = Notes;
