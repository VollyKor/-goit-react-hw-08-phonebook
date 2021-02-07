import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { notesOperations } from 'redux/notes';
import { INoteEntitiy } from 'redux/store.interface';

const { fetchNotes, addNote, deleteNote, changeNote } = notesOperations;

const notesListReducer = createReducer([] as INoteEntitiy[], (builder) => {
  builder
    .addCase(fetchNotes.fulfilled, (_, {payload}) => payload)
    .addCase(addNote.fulfilled, (state, {payload}) => [payload, ...state])
    .addCase(deleteNote.fulfilled, (state, {payload}) => state.filter(e => e.id !== payload))
    .addCase(changeNote.fulfilled, (state, {payload})=> state.map(e => (e.id !== payload.id ? e : payload)))
});

const notesReducer = combineReducers({
  entities: notesListReducer,
});

export default notesReducer;
