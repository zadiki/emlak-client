import { put } from 'redux-saga/effects';
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS } from '../../actions/types';

export function* loginSuccess(user) {
	yield put({ type: LOGIN_SUCCESS, payload: user });
}

export function* loginFail(error) {
	yield put({ type: LOGIN_FAIL, payload: error });
}
export function* logout() {
	yield put({ type: LOGOUT_SUCCESS });
}
