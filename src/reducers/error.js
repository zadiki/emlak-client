import { LOGIN_FAIL, FETCH_PROPERTYLIST_FAILURE } from '../actions/types';

export default function user(state = {}, action = {}) {
	switch (action.type) {
		case LOGIN_FAIL:
			return { ...state, error: action.payload };
		case FETCH_PROPERTYLIST_FAILURE:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}
