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
import { loginSuccess } from './sagas/dispatcher';

if (localStorage.emlakJWT) {
	setAuthorizationHeader(localStorage.emlakJWT);
	apis.user
		.fetchUserData()
		.then(data => {
			loginSuccess(data);
		})
		.catch(err => console.log(err.response.data));
} else {
	setAuthorizationHeader();
	// store.dispatch(userlogout());
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
