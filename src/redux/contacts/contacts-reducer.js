import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contacts-operations';
import { changeFilter } from './contacts-actions';

const itemsReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [payload, ...state],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload.id),
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loadingForFetchReducer = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const loadingForAddReducer = createReducer(false, {
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
});

const loadingForDeleteReducer = createReducer(false, {
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});

const errorReducer = createReducer(null, {
  [fetchContacts.rejected]: (_, { payload }) => payload,
  [fetchContacts.pending]: () => null,
  [addContact.rejected]: (_, { payload }) => payload,
  [addContact.pending]: () => null,
  [deleteContact.rejected]: (_, { payload }) => payload,
  [deleteContact.pending]: () => null,
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loadingForFetch: loadingForFetchReducer,
  loadingForAdd: loadingForAddReducer,
  loadingForDelete: loadingForDeleteReducer,
  error: errorReducer,
});

export default contactsReducer;
