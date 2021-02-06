import { createSlice } from '@reduxjs/toolkit';
import { authOperations, authActions } from 'redux/auth';
import {IAuth, IError, ICredentials, IUser} from '../store.interface'

const initialState : IAuth = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isFetching: false,
    error: null,
  }


interface ICredentialPayload {
  payload: ICredentials;
}

interface IErrorPayload {
  payload: IError;
}

interface IUserPayload {
  payload: IUser;
}

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authActions.cleanseError.toString()](state : IAuth, _) {
      state.error = null;
    },

    // Register
    // ============================================
    [authOperations.register.pending.toString()](state : IAuth, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.register.fulfilled.toString()] (state : IAuth, { payload } : ICredentialPayload ) {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.token;
    },
    [authOperations.register.rejected.toString()](state : IAuth, {payload} : IErrorPayload) {
      state.error = payload;
      state.isLoading = false;
    },

    // Login
    // =======================================
    [authOperations.login.pending.toString()](state : IAuth, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.login.fulfilled.toString()](state : IAuth, { payload }: ICredentialPayload) {
      state.isLoading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.login.rejected.toString()](state: IAuth, {payload} : IErrorPayload) {
      state.error = payload;
      state.isLoading = false;
    },

    // Logout
    // ================================================
    [authOperations.logout.pending.toString()](state: IAuth, _) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logout.fulfilled.toString()](state: IAuth, _) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoading = false;
      state.isLoggedIn = false;
    },
    [authOperations.logout.rejected.toString()](state: IAuth, {payload} : IErrorPayload) {
      state.error = payload;
      state.isLoading = false;
    },

    // Refresh / getUser
    // =======================================================

    [authOperations.getUser.pending.toString()](state: IAuth, _) {
      state.isFetching = true;
      state.isLoading = true;
      state.error = null;
    },

    [authOperations.getUser.fulfilled.toString()](state: IAuth, { payload } : IUserPayload)  {
      state.isLoading = false;
      state.isFetching = false;
      if (payload !== undefined) {
        state.user = payload;
      }
      state.isLoggedIn = true;
    },
    [authOperations.getUser.rejected.toString()](state: IAuth, _) {
      state.isFetching = false;
      state.isLoading = false;
    },
  },
});

export default authReducer.reducer;
