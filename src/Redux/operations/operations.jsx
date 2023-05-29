import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

export const fetchContacts = createAsyncThunk('conacts/fetchAll', async (_, thunkAPI) => {
    try {
       const response = await axios.get("/contacts");
       return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
}
}) 

export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', newContact);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const registerUser = createAsyncThunk('user/register', async (credentials, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('users/signup', credentials);
        token.set(data.token);

        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const loginUser = createAsyncThunk('user/login', async (credentials, {rejectWithValue}) => {
    try {
        const {data} = await axios.post('users/login', credentials);
        token.set(data.token);

        return data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const logoutUser = createAsyncThunk('user/logout', async () => {
    try {
        await axios.post('users/logout');
        token.unset();
    } catch (error) {
        console.log(error);
    }
})

export const refreshCurrentUser = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
   const state = thunkAPI.getState();
   const persistedToken = state.auth.token;

   if (persistedToken === null) {
    return thunkAPI.rejectWithValue();
   }

   token.set(persistedToken);
   try {
    const {data} = await axios.get('users/current');

    return data;
   } catch (error) {
    console.log(error);
   }
}) 