import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './style/fonts/iconic/css/material-design-iconic-font.min.css';
import './style/css/main.css';
import store from './Store';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import apis from './utils/apis';
import { LOGIN_SUCCESS, LOGOUT_REQUEST } from './actions/types';

if (localStorage.emlakJWT) {
	setAuthorizationHeader(localStorage.emlakJWT);
	apis.user
		.fetchUserData()
		.then(data => {
			store.dispatch({ type: LOGIN_SUCCESS, payload: data });
		})
		.catch(err => {
			store.dispatch({ type: LOGOUT_REQUEST });
		});
} else {
	setAuthorizationHeader();
	store.dispatch({ type: LOGOUT_REQUEST });
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
