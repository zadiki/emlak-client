import { takeEvery, take, call, takeLatest } from 'redux-saga/effects';
import {
	loginSuccess,
	loginFail,
	logout,
	userRegistrationSuccess
} from '../dispatchers/userdispatcher';
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

export function* userRegisterWatcher(action) {
	try {
		const response = yield call(apis.user.registerUser, action.payload);
		yield call(userRegistrationSuccess, response.data);
	} catch (error) {
		console.log(error.response.data);
	}
}
