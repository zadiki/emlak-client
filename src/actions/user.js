import { LOGIN_REQUEST } from './types';

export const login = credentials => ({
	type: LOGIN_REQUEST,
	payload: credentials
});

export const logout = () => {
	localStorage.removeItem('emlakJWT');
};
