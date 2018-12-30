import { combineReducers } from 'redux';
import user from './user';
import property from './property';

export default combineReducers({
  user,
  property
});
