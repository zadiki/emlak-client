import {
  POST_PROPERTY,
  FETCH_PROPERTYLIST,
  FETCH_PROPERTY_DETAILS,
  DELETE_PROPERTY_DETAILS,
  FETCH_USER_PROPERTIES
} from '../actions/types';

const initState = {
  property: {},
  isLoading: true,
  propertylist: []
};

export default function property(state = initState, action) {
  let { propertylist } = state;
  switch (action.type) {
    case FETCH_PROPERTYLIST:
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
    case FETCH_PROPERTY_DETAILS:
      return { ...state, property: action.payload };
    case DELETE_PROPERTY_DETAILS:
      return { ...state, property: {} };
    case FETCH_USER_PROPERTIES:
    console.log(action.payload);
      return { ...state, properties: action.payload };
    default:
      return state;
  }
}
