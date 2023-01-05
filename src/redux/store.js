import {createStore} from 'redux';
import { addprofReducer } from './addprofReducer'; 

export const store=createStore(addprofReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
