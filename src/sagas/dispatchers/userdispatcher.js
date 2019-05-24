import { put } from 'redux-saga/effects';
import {
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL
} from '../../actions/types';

export function* loginSuccess(user) {
	yield put({ type: LOGIN_SUCCESS, payload: user });
}

export function* loginFail(error) {
	yield put({ type: LOGIN_FAIL, payload: error });
}
export function* logout() {
	yield put({ type: LOGOUT_SUCCESS });
}
export function* userRegistrationSuccess(message) {
	yield put({ type: USER_REGISTER_FAIL, payload: [] });
	yield put({ type: USER_REGISTER_SUCCESS, payload: message });
}

export function* userRegistrationFail(error) {
	yield put({ type: USER_REGISTER_FAIL, payload: error });
}
