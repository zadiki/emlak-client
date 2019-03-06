import { LOGIN_REQUEST, LOGOUT_REQUEST } from './types';

export const login = credentials => ({
	type: LOGIN_REQUEST,
	payload: credentials
});

export const logout = () => ({ type: LOGOUT_REQUEST });
