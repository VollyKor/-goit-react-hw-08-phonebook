import {createAction } from '@reduxjs/toolkit';
import { INoteEntitiy } from 'redux/store.interface';

export const addNote = createAction<INoteEntitiy>('notes/addNote');
export const deleteNote = createAction<string>('notes/deleteNote');
export const setNotes = createAction<INoteEntitiy[]>('notes/setNotes');
