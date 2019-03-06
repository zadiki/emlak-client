import { takeEvery, take, call, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFail, logout } from '../dispatchers/userdispatcher';
import apis from '../../utils/apis';

export function* loginWatcher(action) {
	try {
		const user = yield call(apis.user.login, action.payload);
		localStorage.emlakJWT = user.token;
		yield call(loginSuccess, user);
	} catch (error) {
		yield call(loginFail, error.response.data);
	}
}

export function* logoutWatcher() {
	localStorage.removeItem('emlakJWT');
	yield call(logout);
}
