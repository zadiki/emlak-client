import apis from '../utils/apis';
import {
  FETCH_PROPERTYLIST,
  FETCH_PROPERTY_DETAILS,
  DELETE_PROPERTY_DETAILS
} from './types';

export const fetchProperties = () => dispatch => {
  dispatch({
    type: DELETE_PROPERTY_DETAILS
  });
  apis.property.fetchProperties().then(data => {
    dispatch({
      type: FETCH_PROPERTYLIST,
      payload: data.propertylist
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
