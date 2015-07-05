import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

var Notes = React.createClass({
  propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div>
        <h2>Notes</h2>
        <p><AddNote username={this.props.username} addNote={this.props.addNote} /></p>
        <p><NotesList notes={this.props.notes} /></p>
      </div>
    )
  }
});

export default Notes;
