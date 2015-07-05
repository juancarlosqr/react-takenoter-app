import React from 'react';

var NotesList = React.createClass({
  propTypes: {
    notes: React.PropTypes.array.isRequired
  },
  render () {
    var notes = this.props.notes.map(function (note, index) {
      return <li className="list-group-item" key={index}>{note}</li>
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
});

export default NotesList;
