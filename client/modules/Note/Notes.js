import React, { PropTypes } from 'react';
import Note from './Note';

<Note
  id={note.id}
  key={note.id}
  editing={note.editing}>
  <Edit
    editing={note.editing}
    value={note.task}
    onValueClick={() => onValueClick(note.id)}
    onEdit={() => onEdit(note.id)}
    onDelete={() => onDelete(note.id)}
  />
</Note>

Notes.propTypes = {
  notes: PropTypes.array
};

export default Notes;