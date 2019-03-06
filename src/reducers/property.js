import {
	POST_PROPERTY,
	FETCH_PROPERTYLIST_SUCCESS,
	FETCH_PROPERTY_SUCCESS
} from '../actions/types';

const initState = {
	property: {},
	isLoading: true,
	propertylist: []
};

export default function property(state = initState, action) {
	let { propertylist } = state;
	switch (action.type) {
		case FETCH_PROPERTYLIST_SUCCESS:
			propertylist = action.payload.map(
				obj => propertylist.find(o => o.id === obj.id) || obj
			);
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				propertylist
			};
		case POST_PROPERTY:
			return { ...state, isLoading: false };
		case FETCH_PROPERTY_SUCCESS:
			return { ...state, property: action.payload };
		default:
			return state;
	}
}
