import { axiosPB } from 'service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {ICredentials, IState} from '../store.interface'

const token = {
  set(token: string): void {
    axiosPB.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosPB.defaults.headers.common.Authorization = null;
  },
};

export const register = createAsyncThunk(
  'auth/signup',
  async (credential, thunkAPI) => {
    try {
      const {data}: {data: ICredentials} = await axiosPB.post('/users/signup', credential);
      token.set(data.token);
      return data;
    } catch (err) {
      const newErrorObg = {
        status: err.response.status,
        message: err.response.statusText,
      };
      return thunkAPI.rejectWithValue(newErrorObg);
    }
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data }: {data: ICredentials} = await axiosPB.post('/users/login', credentials);
      token.set(data.token);
      return data;
    } catch (err) {
      const newErrorObg = {
        status: err.response.status,
        message: err.response.statusText,
      };
      return thunkAPI.rejectWithValue(newErrorObg);
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axiosPB.post('/users/logout');
    token.unset();
  } catch (err) {
    const newErrorObg = {
      status: err.response.status,
      message: err.response.statusText,
    };
    return thunkAPI.rejectWithValue(newErrorObg);
  }
});

export const getUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  try {
    const state  = thunkAPI.getState() as IState;
    const persistedToken = state.auth.token ;

    if (persistedToken === null) {
      return;
    }
    token.set(persistedToken);

    const user = await axiosPB.get('/users/current');
    return user.data;
  } catch (err) {
    const newErrorObg = {
      status: err.response.status,
      message: err.response.statusText,
    };
    return thunkAPI.rejectWithValue(newErrorObg);
  }
});
