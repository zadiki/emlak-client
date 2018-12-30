import { userlogin, userlogout } from './auth';
import apis from '../utils/apis';

export const login = credentials => dispatch => {
  apis.user.login(credentials).then(user => {
    localStorage.emlakJWT = user.token;
    dispatch(userlogin(user));
  });
};
export const logout = data => dispatch => {
  localStorage.removeItem('emlakJWT');
  dispatch(userlogout());
};
