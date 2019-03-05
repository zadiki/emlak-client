import { takeEvery, take, call, takeLatest } from 'redux-saga/effects';
import {
	propertyloadSuccess,
	propertyloadFailure
} from '../dispatchers/propertydispatchers';
import apis from '../../utils/apis';

export function* fetchPropertiesWatcher() {
	try {
		const data = yield call(apis.property.fetchProperties);
		yield call(propertyloadSuccess, data.propertylist);
	} catch (error) {
		yield call(propertyloadFailure, error.response.data);
	}
}

export function* fetchPropertyWatcher() {
	console.log('test1');
}
