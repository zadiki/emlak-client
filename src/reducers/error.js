import {
	LOGIN_FAIL,
	FETCH_PROPERTYLIST_FAILURE,
	USER_REGISTER_FAIL
} from '../actions/types';

const initiatlState = {
	error: []
};
export default function user(state = initiatlState, action = {}) {
	switch (action.type) {
		case LOGIN_FAIL:
			return { ...state, error: action.payload };
		case FETCH_PROPERTYLIST_FAILURE:
			return { ...state, error: action.payload };
		case USER_REGISTER_FAIL:
			return { ...state, error: action.payload };
		default:
			return state;
	}
}
