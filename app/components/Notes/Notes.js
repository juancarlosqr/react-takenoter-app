import React from 'react';
import NotesList from './NotesList';
import AddNote from './AddNote';

class Notes extends React.Component {
  render () {
    return (
      <div>
        <h2>Notes</h2>
        <p><AddNote username={this.props.username} addNote={this.props.addNote} /></p>
        <p><NotesList notes={this.props.notes} /></p>
      </div>
    )
  }
};

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default Notes;
