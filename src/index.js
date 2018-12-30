import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style/login.css';
import './style/main.css';
import store from './Store';
import {userlogin,userlogout} from './actions/auth';
import setAuthorizationHeader from './utils/setAuthorizationHeader';
import apis from './utils/apis';

   if (localStorage.emlakJWT) {    
        setAuthorizationHeader(localStorage.emlakJWT);
        apis.user.fetchUserData().then(data=>{            
            store.dispatch(userlogin(data));
        }).catch(err=>store.dispatch(userlogout()));
        
    }else{
        setAuthorizationHeader();
        store.dispatch(userlogout());
    }
    

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
