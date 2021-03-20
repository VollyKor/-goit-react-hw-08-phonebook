import { createAsyncThunk } from '@reduxjs/toolkit';
import { INoteEntitiy, INoteSubmit } from 'Interfaces/interface';
import { fetchNotesAPI } from 'service';

export const fetchNotes = createAsyncThunk('notes/fetchNotes', async () => {
  try {
    const response = await fetchNotesAPI.getNotes();
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const addNote = createAsyncThunk(
  'notes/addNote',
  async (newNote: INoteSubmit) => {
    try {
      const response = await fetchNotesAPI.addNote(newNote);
      const data = response.data;
      return data;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteNote = createAsyncThunk(
  'notes/deleteNote',
  async (NoteId: string) => {
    try {
      const response = await fetchNotesAPI.deleteNote(NoteId);
      return response;
    } catch (error) {
      throw error;
    }
  },
);

interface IchangeNote {
  noteId: string;
  changedObj: INoteEntitiy;
}

// unnecessary atm
export const changeNote = createAsyncThunk(
  'notes/changeNote',
  async (dataObj: IchangeNote) => {
    try {
      const { noteId, changedObj } = dataObj;
      const response = await fetchNotesAPI.changeNote(noteId, changedObj);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
