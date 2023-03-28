import { createSlice } from '@reduxjs/toolkit';

import {
  loginOperation,
  logoutOperation,
  refreshOperation,
  registrationOperation,
} from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: {
    [registrationOperation.pending](state, action) {},
    [registrationOperation.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [registrationOperation.rejected](state, action) {},
    [loginOperation.pending](state, action) {
      state.loading = true;
    },
    [loginOperation.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [loginOperation.rejected](state, action) {},

    [logoutOperation.pending](state, action) {},
    [logoutOperation.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logoutOperation.rejected](state, action) {},

    [refreshOperation.pending](state, action) {
      state.isRefreshing = true;
    },
    [refreshOperation.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
    [refreshOperation.rejected](state, action) {
      state.isRefreshing = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { userLogin, userLogout } = authSlice.actions;
