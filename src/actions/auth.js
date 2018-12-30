import { LOGIN, LOGOUT } from './types';

export const userlogin = data => ({
  type: LOGIN,
  payload: data
});

export const userlogout = () => ({
  type: LOGOUT
});
