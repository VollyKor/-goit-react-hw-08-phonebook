import { createSlice } from '@reduxjs/toolkit';
import { authOperations, authActions } from 'redux/auth';
import {IAuth, IError} from '../store.interface'

const initialState : IAuth = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isFetching: false,
    error: null,
  }

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authActions.cleanseError.toString()](state, _) {
      state.error = null;
    },

    // Register
    // ============================================
    [authOperations.register.pending.toString()](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.register.fulfilled.toString()](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authOperations.register.rejected.toString()](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    // Login
    // =======================================
    [authOperations.login.pending.toString()](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.login.fulfilled.toString()](state, { payload }) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected.toString()](state, action) {
      console.log('action', action);
      state.error = action.payload;

      state.isLoading = false;
    },

    // Logout
    // ================================================
    [authOperations.logout.pending.toString()](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logout.fulfilled.toString()](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected.toString()](state, {payload}) {
      state.error = payload;
      state.isLoading = false;
    },

    // Refresh / getUser
    // =======================================================

    [authOperations.getUser.pending.toString()](state, _) {
      state.isFetching = true;
      state.isLoading = true;
      state.error = null;
    },

    [authOperations.getUser.fulfilled.toString()](state, { payload }) {
      state.isLoading = false;
      state.isFetching = false;
      if (payload !== undefined) {
        state.user = payload;
      }
      state.isLoggedIn = true;
    },
    [authOperations.getUser.rejected.toString()](state, { payload }) {
      state.isFetching = false;
      state.isLoading = false;
      console.log('error', payload);
    },
  },
});

export default authReducer.reducer;
