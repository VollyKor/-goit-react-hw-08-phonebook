import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { contactsOperations, contactsActions } from 'redux/phonebook';
import { IContact } from 'Interfaces/interface';

const {
  setContacts,
  addContact,
  deleteContact,
  changeContact,
} = contactsOperations;

const FilterReducer = createReducer('' as string, builder => {
  builder.addCase(contactsActions.setFilter, (_, { payload }) => payload);
});

const ContactListReducer = createReducer([] as IContact[], builder =>
  builder
    .addCase(setContacts.fulfilled, (_, { payload }) => payload.contacts)
    .addCase(addContact.fulfilled, (state, { payload }) => {
      return [...state, payload];
    })

    .addCase(deleteContact.fulfilled, (state, { payload }) =>
      state.filter(e => e.id !== payload),
    )

    .addCase(changeContact.fulfilled, (state, { payload }) =>
      state.map(e => (e.id !== payload.id ? e : payload)),
    ),
);

const phonebookReducer = combineReducers({
  entities: ContactListReducer,
  filterQuery: FilterReducer,
});

export default phonebookReducer;
