import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContactsAPI } from 'service';
import {INewContact} from '../store.interface'

export const setContacts = createAsyncThunk(
  'phonebook/fetchContacts',
  async () => {
    try {
      const response = await fetchContactsAPI.getContacts();
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const addContact = createAsyncThunk(
  'phonebook/addContact',
  async (newContact: INewContact) => {
    try {
      const response = await fetchContactsAPI.addContact(newContact);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
);

export const deleteContact = createAsyncThunk(
  'phonebook/deleteContact',
  async (NoteId : string) => {
    try {
      await fetchContactsAPI.deleteContact(NoteId);
      return NoteId;
    } catch (error) {
      throw error;
    }
  },
);

interface IData { 
  id: string;
  changedContact: INewContact;
}

export const changeContact = createAsyncThunk(
  'phonebook/changeContact',
  async (data: IData) => {
    try {
      const { id, changedContact } = data;
      const response = await fetchContactsAPI.changeContact(id, changedContact);
      return response;
    } catch (error) {
      throw error;
    }
  },
);
