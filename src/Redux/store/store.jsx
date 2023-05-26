import { configureStore } from "@reduxjs/toolkit";
import { SliceFilter, SliceContacts } from "Redux/Slices/Slices";
import authSlice from "Redux/Slices/Auth-slice";
import { combineReducers } from 'redux';
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";


const authPesistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const rootReducer = combineReducers({
  contacts: SliceContacts.reducer,
  filter: SliceFilter.reducer,
  auth: persistReducer(authPesistConfig, authSlice.reducer),
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);