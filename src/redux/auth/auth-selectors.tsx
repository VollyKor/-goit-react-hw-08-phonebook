import {IState} from '../store.interface'

export const getIsLoggedIn = (state : IState) => state.auth.isLoggedIn;
export const getIsFetching = (state : IState) => state.auth.isFetching;
export const getIsLoading = (state : IState) => state.auth.isLoading;
export const getUserName = (state : IState) => state.auth.user.name;
export const getToken = (state : IState) => state.auth.token;
export const getError = (state : IState) => state.auth.error;
