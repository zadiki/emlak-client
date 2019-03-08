import { LOGIN_REQUEST, LOGOUT_REQUEST, USER_REGISTER } from './types';

export const login = credentials => ({
	type: LOGIN_REQUEST,
	payload: credentials
});

export const logout = () => ({ type: LOGOUT_REQUEST });

export const registerUser = user => ({
	type: USER_REGISTER,
	payload: user
});
