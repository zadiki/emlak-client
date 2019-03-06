import { takeEvery, take, call, takeLatest } from 'redux-saga/effects';
import {
	propertiesloadSuccess,
	propertiesloadFailure,
	userPropertiesloadSuccess,
	propertyloadSuccess
} from '../dispatchers/propertydispatchers';
import apis from '../../utils/apis';

export function* fetchPropertiesWatcher() {
	try {
		const data = yield call(apis.property.fetchProperties);
		yield call(propertiesloadSuccess, data.propertylist);
	} catch (error) {
		yield call(propertiesloadFailure, error.response.data);
	}
}

export function* fetchUserPropertiesWatcher(action) {
	try {
		const data = yield call(apis.user.fetchUserProperties, action.payload);
		yield call(userPropertiesloadSuccess, data.propertylist);
	} catch (error) {
		yield call(propertiesloadFailure, error.response.data);
	}
}

export function* fetchPropertyWatcher(action) {
	try {
		const data = yield call(apis.property.fetchPropertyDetail, action.payload);
		yield call(propertyloadSuccess, data);
	} catch (error) {
		yield call(propertiesloadFailure, error.response.data);
	}
}
