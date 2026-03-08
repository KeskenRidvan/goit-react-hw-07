import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        const deletedContactId = action.payload?.id ?? action.meta.arg;
        state.items = state.items.filter(
          contact => contact.id !== deletedContactId
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
);

export const contactsReducer = contactsSlice.reducer;

export default contactsReducer;
