import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "no-authenticated",
    uid: null,
    email: null,
    photoURL: null,
    displayName: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.uid = payload.uid;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.displayName = payload.displayName;
      state.errorMessage = null;
    },
    logout: (state, {payload}) => {
      state.status = "no-authenticated";
      state.uid = null;
      state.email = null;
      state.photoURL = null;
      state.displayName = null;
      state.errorMessage = payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// action creators are generated for each case reducer function

export const { login, logout, checkingCredentials } = authSlice.actions;

export default authSlice.reducer;
