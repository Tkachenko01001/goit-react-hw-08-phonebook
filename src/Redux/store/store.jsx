import { configureStore } from "@reduxjs/toolkit";
import { SliceFilter, SliceContacts } from "Redux/Slices/Slices";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  contacts: SliceContacts.reducer,
  filter: SliceFilter.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});