import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "Redux/operations/operations";

const handleRejected = (state, action) => {
  state.operation = null;
  state.isLoading = false;
  state.error = action.payload;
};

const SliceContacts = createSlice({
  name: "Contacts",
  initialState: {
    items: [],
    isLoading: false,
    operation: null,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
      state.operation = 'fatch';
    },
    [addContact.pending](state) {
      state.isLoading = true;
      state.operation = 'add';
    },
    [deleteContact.pending](state, action) {
      state.isLoading = true;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.rejected]: handleRejected,
    [deleteContact.rejected]: handleRejected,
    [fetchContacts.fulfilled](state, action) {
      state.operation = null;
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },

    [addContact.fulfilled] (state, action) {
      state.isLoading = false;
      state.error = null;
      state.operation = null;
      state.items.push(action.payload);
    },

    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => contact.id !== action.payload.id);
    },
  }
});

const SliceFilter = createSlice({
  name: "Filter",
  initialState: "",
  reducers: {
    filterContacts(_, action) {
      return action.payload
    }
  }
});

export const contactsRedusers = SliceContacts.reducer;
export const { filterContacts } = SliceFilter.actions;
export { SliceFilter, SliceContacts };