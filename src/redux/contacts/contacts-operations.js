import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://61e6956cce3a2d0017359297.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const items = await axios.get('/contacts');
      return items.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',

  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const item = await axios.post('/contacts', { name, phone });
      return item.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const deletedItem = await axios.delete(`/contacts/${contactId}`);
      return deletedItem.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
