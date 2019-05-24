import { combineReducers } from 'redux';
import user from './user';
import property from './property';
import errors from './error';

export default combineReducers({
	user,
	property,
	errors
});
