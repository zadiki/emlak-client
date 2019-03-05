import { LOGIN_REQUEST } from './types';

export const login = credentials => dispatch => {
	dispatch({ type: LOGIN_REQUEST, payload: credentials });
};

export const logout = data => dispatch => {
	localStorage.removeItem('emlakJWT');
};
