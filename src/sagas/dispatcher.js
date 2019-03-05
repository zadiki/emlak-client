import { put } from 'redux-saga/effects';
import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types';

export function* loginSuccess(user) {
	yield put({ type: LOGIN_SUCCESS, payload: user });
}

export function* loginFail(error) {
	yield put({ type: LOGIN_FAIL, payload: error });
}
