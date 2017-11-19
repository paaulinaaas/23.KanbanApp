import {CREATE_NOTE, CREATE_NOTES, UPDATE_NOTE, DELETE_NOTE } from './NoteActions';

const initialState = {};

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return { ...state, [action.note.id]: action.note };
    case CREATE_NOTES:
      return { ...action.notes };
    case UPDATE_NOTE:
      return { ...state, [action.updatedNote.id]: action.updatedNote };
    case DELETE_NOTE:
      return _.omit(state, action.id);
    default:
      return state;
  }
}
