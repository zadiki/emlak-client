import { LOGIN_FAIL } from '../actions/types';

export default function user(state = {}, action = {}) {
	switch (action.type) {
		case LOGIN_FAIL:
			console.log(action.payload);
			return { ...state, error: action.payload };
		default:
			return state;
	}
}
