import {
	FETCH_PROPERTYLIST,
	FETCH_PROPERTY,
	FETCH_USER_PROPERTIES,
	SEARCH_PROPERTY
} from './types';

export const fetchProperties = () => ({
	type: FETCH_PROPERTYLIST
});

export const fetchUserProperties = userId => ({
	type: FETCH_USER_PROPERTIES,
	payload: userId
});

export const fetchPropertyDetail = id => ({
	type: FETCH_PROPERTY,
	payload: id
});

export const searchProperty = query => ({
	type: SEARCH_PROPERTY,
	payload: query
});
