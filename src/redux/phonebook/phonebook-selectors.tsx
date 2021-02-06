import { createSelector } from '@reduxjs/toolkit';
import {IState} from '../store.interface'


export const getContacts = (state: IState) => state.phonebook.entities;
export const getFilterQuery = (state: IState) => state.phonebook.filterQuery;

export const getVisibleContacts = createSelector(
  [getContacts, getFilterQuery],
  (contacts, filterQuery) => {
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterQuery),
    );
    return filteredArr;
  },
);
