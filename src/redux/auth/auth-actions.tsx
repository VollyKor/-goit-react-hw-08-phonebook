import { createAction } from '@reduxjs/toolkit';

export const cleanseError = createAction('auth/error');
export const toggleIsRegistered = createAction('auth/toggleIsRegistered');
