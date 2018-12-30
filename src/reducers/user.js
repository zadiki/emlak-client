import { LOGIN, LOGOUT } from '../actions/types';

const initState = {
  isAuthenticated: false,
  isLoading: true,
  name: 'zadiki'
};

export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
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
