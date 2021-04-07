import { createAsyncThunk } from '@reduxjs/toolkit';
import { INoteSubmit, IchangeNote } from 'Interfaces/interface';
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

export const changeNote = createAsyncThunk(
  'notes/changeNote',
  async (data: IchangeNote) => {
    try {
      const response = await fetchNotesAPI.changeNote(data.id, data);
      console.log(response.data);

      return response.data;
    } catch (error) {
      throw error;
    }
  },
);
