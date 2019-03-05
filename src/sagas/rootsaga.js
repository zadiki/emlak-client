import {all} from 'redux-saga/effects';
import { loginWatcher } from './watcherSaga';

export default function* rootSage(){
    yield all([
        loginWatcher()
    ]);
}