import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/login.css';
import './style/main.css';
import store from './Store';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import apis from './utils/apis';
import { loginSuccess } from './sagas/dispatchers/userdispatcher';
import { LOGIN_SUCCESS } from './actions/types';

if (localStorage.emlakJWT) {
	setAuthorizationHeader(localStorage.emlakJWT);
	apis.user
		.fetchUserData()
		.then(data => {
			store.dispatch({ type: LOGIN_SUCCESS, payload: data });
			loginSuccess(data);
		})
		.catch(err => console.log(err.response.data));
} else {
	setAuthorizationHeader();
	// store.dispatch(userlogout());
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
