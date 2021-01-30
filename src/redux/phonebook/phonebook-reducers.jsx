import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { contactsOperations, contactsActions } from 'redux/phonebook';
const {
  setContacts,
  addContact,
  deleteContact,
  changeContact,
} = contactsOperations;

const FilterReducer = createReducer('', {
  [contactsActions.setFilter]: (_, { payload }) => payload,
});

const ContactListReducer = createReducer([], {
  [setContacts.fulfilled]: (_, { payload }) => payload,

  [addContact.fulfilled]: (state, { payload }) => {
    return [payload, ...state];
  },

  [deleteContact.fulfilled]: (state, { payload }) => {
    return state.filter(e => e.id !== payload);
  },

  [changeContact.fulfilled]: (state, { payload }) => {
    return state.map(e => (e.id !== payload.id ? e : payload));
  },
});

const phonebookReducer = combineReducers({
  entities: ContactListReducer,
  filterQuery: FilterReducer,
});

export default phonebookReducer;
