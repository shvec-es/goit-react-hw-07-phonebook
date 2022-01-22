import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoadingForFetch = state => state.contacts.loadingForFetch;
export const getLoadingForAdd = state => state.contacts.loadingForAdd;
export const getLoadingForDelete = state => state.contacts.loadingForDelete;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getItems, getFilter],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
