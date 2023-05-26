import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser, logoutUser, refreshCurrentUser } from "Redux/operations/operations";

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const saveDataUser = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [registerUser.fulfilled](state, action){ saveDataUser(state, action) },
        [loginUser.fulfilled](state, action){ saveDataUser(state, action) },

        [logoutUser.fulfilled](state, _){ 
            state.user = {name: null, email: null};
            state.token = null;
            state.isLoggedIn = false;
         },

        [refreshCurrentUser.pending](state){
            state.isRefreshing = true;
        },

        [refreshCurrentUser.fulfilled](state, action){
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
        },

        [refreshCurrentUser.rejected](state){
            state.isRefreshing = false;
        }
    }
})

export default authSlice;