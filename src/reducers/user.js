import {
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	USER_REGISTER_FAIL,
	USER_REGISTER_SUCCESS
} from '../actions/types';

const initState = {
	isAuthenticated: false,
	registerSuccess: '',
	isLoading: true,
	user: {}
};

export default function user(state = initState, action) {
	switch (action.type) {
		case LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				user: action.payload
			};
		case LOGOUT_SUCCESS:
			return { ...state, isAuthenticated: false, isLoading: false };
		case USER_REGISTER_SUCCESS:
			return {
				...state,
				registerSuccess: action.payload.msg,
				registration: true
			};
		case USER_REGISTER_FAIL:
			return { ...state, registration: false };
		default:
			return state;
	}
}
