import { takeEvery, take, call } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../actions/types';
import { loginSuccess, loginFail } from './dispatcher';
import apis from '../utils/apis';

export function* loginWatcher() {
	const request = yield take(LOGIN_REQUEST);
	try {
		const user = yield call(apis.user.login, request.payload);
		localStorage.emlakJWT = user.token;
		yield call(loginSuccess, user);
	} catch (error) {
		yield call(loginFail, error.response.data);
	}
}
export function logoutWatcher() {}
