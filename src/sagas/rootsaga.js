import { takeLatest } from 'redux-saga/effects';
import {
	LOGIN_REQUEST,
	FETCH_PROPERTYLIST,
	FETCH_USER_PROPERTIES,
	FETCH_PROPERTY,
	LOGOUT_REQUEST
} from '../actions/types';
import { loginWatcher, logoutWatcher } from './watchers/userSagas';
import {
	fetchPropertiesWatcher,
	fetchPropertyWatcher,
	fetchUserPropertiesWatcher
} from './watchers/propertySagas';

export default function* rootSage() {
	yield takeLatest(LOGIN_REQUEST, loginWatcher);
	yield takeLatest(LOGOUT_REQUEST, logoutWatcher);
	yield takeLatest(FETCH_PROPERTYLIST, fetchPropertiesWatcher);
	yield takeLatest(FETCH_USER_PROPERTIES, fetchUserPropertiesWatcher);
	yield takeLatest(FETCH_PROPERTY, fetchPropertyWatcher);
}
