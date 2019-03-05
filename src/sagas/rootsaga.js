import { takeLatest } from 'redux-saga/effects';
import { LOGIN_REQUEST, FETCH_PROPERTYLIST } from '../actions/types';
import { loginWatcher } from './watchers/userSagas';
import { fetchPropertiesWatcher } from './watchers/propertySagas';

export default function* rootSage() {
	yield takeLatest(LOGIN_REQUEST, loginWatcher);
	yield takeLatest(FETCH_PROPERTYLIST, fetchPropertiesWatcher);
}
