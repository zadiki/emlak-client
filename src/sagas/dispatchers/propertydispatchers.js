import { put } from 'redux-saga/effects';
import {
	FETCH_PROPERTYLIST_SUCCESS,
	FETCH_PROPERTYLIST_FAILURE,
	FETCH_PROPERTY_SUCCESS
} from '../../actions/types';

export function* propertiesloadSuccess(properties) {
	yield put({ type: FETCH_PROPERTYLIST_SUCCESS, payload: properties });
}
export function* propertiesloadFailure(error) {
	yield put({ type: FETCH_PROPERTYLIST_FAILURE, payload: error });
}

export function* userPropertiesloadSuccess(properties) {
	yield put({ type: FETCH_PROPERTYLIST_SUCCESS, payload: properties });
}

export function* propertyloadSuccess(property) {
	console.log(property);
	yield put({ type: FETCH_PROPERTY_SUCCESS, payload: property });
}
