import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phonebook.entities;
export const getFilterQuery = state => state.phonebook.filterQuery;

export const getVisibleContacts = createSelector(
  [getContacts, getFilterQuery],
  (contacts, filterQuery) => {
    const filteredArr = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterQuery),
    );
    return filteredArr;
  },
);
