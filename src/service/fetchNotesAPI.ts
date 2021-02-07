import axios from 'axios';
import { INoteEntitiy } from 'redux/store.interface';

axios.defaults.baseURL = 'http://localhost:4040';

export const getNotes = async () => {
  try {
    const response = await axios.get<INoteEntitiy[]>('/notes');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNote = async (noteObj: INoteEntitiy) => {
  try {
    const response = await axios.post<INoteEntitiy>('/notes', noteObj);
    return response.data;
  } catch (error) {
throw error;
  }
};

export const deleteNote = async (notejId: string) => {
  try {
    await axios.delete(`/notes/${notejId}`);
    return notejId;
  } catch (error) {
    throw error;
  }
};

export const changeNote = async (noteId : string, changedNote : INoteEntitiy) => {
  try {
    const response = await axios.patch<INoteEntitiy>(`/notes/${noteId}`, changedNote);
    return response.data;
  } catch (error) {
    throw error;
  }
};
