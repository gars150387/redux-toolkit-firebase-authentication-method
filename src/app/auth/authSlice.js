import { createSlice } from  "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        uid: null,
        email: null,
        displayName: null,
        errorMessage: null,
    },
    reducers: {
        login: (state, action) =>{

        },
        logout: (state, payload) =>{

        },
        checkingCredentials: (state) =>{

        }
    }
})

// action creators are generated for each case reducer function

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer