import { takeLatest } from 'redux-saga/effects';
import {
	LOGIN_REQUEST,
	FETCH_PROPERTYLIST,
	LOGOUT_REQUEST
} from '../actions/types';
import { loginWatcher, logoutWatcher } from './watchers/userSagas';
import { fetchPropertiesWatcher } from './watchers/propertySagas';

export default function* rootSage() {
	yield takeLatest(LOGIN_REQUEST, loginWatcher);
	yield takeLatest(LOGOUT_REQUEST, logoutWatcher);
	yield takeLatest(FETCH_PROPERTYLIST, fetchPropertiesWatcher);
}
