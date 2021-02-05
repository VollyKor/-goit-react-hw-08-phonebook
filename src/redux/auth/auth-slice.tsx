import { createSlice } from '@reduxjs/toolkit';
import { authOperations, authActions } from 'redux/auth';
const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isFetching: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [authActions.cleanseError](state, _) {
      console.log('hello');
      state.error = null;
    },
    // Register
    // ============================================
    [authOperations.register.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.register.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authOperations.register.rejected](state, action) {
      console.log(action.payload);
      state.error = action.payload;
      state.isLoading = false;
    },

    // Login
    // =======================================
    [authOperations.login.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.login.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected](state, action) {
      console.log('action', action);
      state.error = action.payload;

      state.isLoading = false;
    },

    // Logout
    // ================================================
    [authOperations.logout.pending](state, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logout.fulfilled](state, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    // Refresh / getUser
    // =======================================================

    [authOperations.getUser.pending](state, _) {
      state.isFetching = true;
      state.isLoading = true;
      state.error = null;
    },

    [authOperations.getUser.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.isFetching = false;
      if (payload !== undefined) {
        state.user = payload;
      }
      state.isLoggedIn = true;
    },
    [authOperations.getUser.rejected](state, { payload }) {
      state.isFetching = false;
      state.isLoading = false;
      console.log('error', payload);
    },
  },
});

export default authReducer.reducer;
