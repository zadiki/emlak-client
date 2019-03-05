import { LOGIN_SUCCESS, LOGOUT } from '../actions/types';

const initState = {
	isAuthenticated: false,
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
		case LOGOUT:
			return { ...state, isAuthenticated: false, isLoading: false };
		default:
			return state;
	}
}
