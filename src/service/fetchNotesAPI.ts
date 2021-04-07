import { INoteEntitiy, INoteSubmit, INotesResponse, IoneNoteResponse } from 'Interfaces/interface';
import {axiosPB} from './index'

// axios.defaults.baseURL = 'http://localhost:3000';

export const getNotes = async () => {
  try {
    const response = await axiosPB.get<INotesResponse>('/notes');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNote = async (noteObj: INoteSubmit) => {
  try {
    const response  = await axiosPB.post<IoneNoteResponse>('/notes', noteObj);
    return response.data;
  } catch (error) {
throw error;
  }
};

export const deleteNote = async (notejId: string) => {
  try {
    await axiosPB.delete(`/notes/${notejId}`);
    return notejId;
  } catch (error) {
    throw error;
  }
};

export const changeNote = async (noteId : string, changedNote : INoteEntitiy) => {
  try {
    const response = await axiosPB.patch<IoneNoteResponse>(`/notes/${noteId}`, changedNote);
    return response.data;
  } catch (error) {
    throw error;
  }
};