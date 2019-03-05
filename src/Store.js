import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import  createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import rootSaga from './sagas/rootsaga';

const sagaMiddleware=createSagaMiddleware();
 const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware,thunk))
    );
    sagaMiddleware.run(rootSaga);
export default store;