import axios from 'axios';
import { INoteEntitiy, INoteSubmit, INotesResponse, IoneNoteResponse } from 'Interfaces/interface';


axios.defaults.baseURL = 'https://vol-kor-pet-project.herokuapp.com';

export const getNotes = async () => {
  try {
    const response = await axios.get<INotesResponse>('/notes');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addNote = async (noteObj: INoteSubmit) => {
  try {
    const response  = await axios.post<IoneNoteResponse>('/notes', noteObj);
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