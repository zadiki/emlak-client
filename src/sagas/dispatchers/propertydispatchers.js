import { put } from 'redux-saga/effects';
import {
	FETCH_PROPERTYLIST_SUCCESS,
	FETCH_PROPERTYLIST_FAILURE
} from '../../actions/types';

export function* propertyloadSuccess(properties) {
	// yield put({ type: DELETE_PROPERTY_DETAILS });
	yield put({ type: FETCH_PROPERTYLIST_SUCCESS, payload: properties });
}
export function* propertyloadFailure(error) {
	yield put({ type: FETCH_PROPERTYLIST_FAILURE, payload: error });
}
