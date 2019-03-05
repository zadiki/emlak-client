import apis from '../utils/apis';
import {
	FETCH_PROPERTYLIST,
	FETCH_PROPERTY_DETAILS,
	FETCH_USER_PROPERTIES
} from './types';

export const fetchProperties = () => ({
	type: FETCH_PROPERTYLIST
});

export const fetchUserProperties = userId => dispatch => {
	apis.user.fetchUserProperties(userId).then(data => {
		dispatch({
			type: FETCH_USER_PROPERTIES,
			payload: data
		});
	});
};

export const fetchPropertyDetail = id => dispatch => {
	apis.property.fetchPropertyDetail(id).then(data => {
		dispatch({
			type: FETCH_PROPERTY_DETAILS,
			payload: data
		});
	});
};

export const searchProperty = () => dispatch => {
	console.log('searched');
};
