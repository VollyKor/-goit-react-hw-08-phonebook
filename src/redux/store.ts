import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { phonebookReducer } from 'redux/phonebook';
import { notesReducer } from 'redux/notes';
import { authSlice } from 'redux/auth';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  // whitelist: ['user'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
    notes: notesReducer,
    phonebook: phonebookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
